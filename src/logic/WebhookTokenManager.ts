export class SavedToken {
    id: number;
    name: string;
    webhookId: string;
    webhookToken: string;

    constructor(id: number, name: string, webhookId: string, webhookToken: string) {
        this.id = id;
        this.name = name;
        this.webhookId = webhookId;
        this.webhookToken = webhookToken;
    }

    static fromJson(json: string): SavedToken {
        const obj = JSON.parse(json);

        if (obj.id === undefined) throw new Error(`json does not have an id property.`);
        if (obj.name === undefined) throw new Error(`json does not have a name property.`);
        if (obj.webhookId === undefined) throw new Error(`json does not have a webhookId property.`);
        if (obj.webhookToken === undefined) throw new Error(`json does not have a webhookToken property.`);

        return new SavedToken(obj.id, obj.name, obj.webhookId, obj.webhookToken);
    }
}

const localStorageKey = "WebhookTokenManager";

export default class WebhookTokenManager {
    private static instance = new WebhookTokenManager();

    private nextId: number;
    private tokens: SavedToken[];
    private selectedId: number;

    private constructor() {
        const jsonOnStorage = localStorage.getItem(localStorageKey);

        if (jsonOnStorage === null) {
            // 未登録の場合、localStorageを初期化する
            this.nextId = 0;
            this.tokens = [];
            this.selectedId = 0;
        }
        else {
            // 登録済みの場合、localStorageからプロパティを設定する
            const obj = JSON.parse(jsonOnStorage);

            this.nextId = obj.nextId;
            this.tokens = obj.tokens.map((item: any) => new SavedToken(item.id, item.name, item.webhookId, item.webhookToken));
            this.selectedId = obj.selectedId;
        }
    }

    public static getInstance(): WebhookTokenManager {
        return WebhookTokenManager.instance;
    }

    /**
     * 新しいWebhookTokenをIDを採番して登録する。
     * 
     * @param name 登録token名
     * @param webhookId webhookId
     * @param webhookToken webhookToken
     */
    public addNewToken(name: string, webhookId: string, webhookToken: string): number {
        const newToken = new SavedToken(this.nextId, name, webhookId, webhookToken);
        this.tokens.push(newToken);
        this.nextId++;
        this.WriteToLocalStorage();
        return newToken.id;
    }

    public getTokenList(): SavedToken[] {
        return this.tokens.slice();
    }

    public getTokenById(id: number): SavedToken | undefined {
        return this.tokens.find(token => token.id === id);
    }

    public deleteTokenById(id: number): void {
        this.tokens = this.tokens.filter(token => token.id !== id);
        this.WriteToLocalStorage();
    }

    public getSelectedToken(): SavedToken | undefined {
        return this.getTokenById(this.selectedId);
    }

    public setSelectedId(id: number): void {
        this.selectedId = id;
        this.WriteToLocalStorage();
    }

    private WriteToLocalStorage():void {
        localStorage.setItem(localStorageKey, JSON.stringify(this));
    }
}
