/** Sub Weapon class. */
export class SubWeapon {
    constructor(
        private name: string,
        private imageUrl?: string,
    ) { }

    get Name() { return this.name; }
    get ImageUrl() { return this.imageUrl; }

    public toString(): string {
        return `サブウェポン：${this.name}`;
    }
}

export class SubWeapons {
    private static image_url = "https://stin-dev.github.io/hosting/splatoon2/sub";

    static スプラッシュボム: SubWeapon = new SubWeapon("スプラッシュボム", `${SubWeapons.image_url}/sub_10.png`);
    static キューバンボム: SubWeapon = new SubWeapon("キューバンボム", `${SubWeapons.image_url}/sub_11.png`);
    static クイックボム: SubWeapon = new SubWeapon("クイックボム", `${SubWeapons.image_url}/sub_12.png`);
    static スプリンクラー: SubWeapon = new SubWeapon("スプリンクラー", `${SubWeapons.image_url}/sub_19.png`);
    static ジャンプビーコン: SubWeapon = new SubWeapon("ジャンプビーコン", `${SubWeapons.image_url}/sub_20.png`);
    static スプラッシュシールド: SubWeapon = new SubWeapon("スプラッシュシールド", `${SubWeapons.image_url}/sub_18.png`);
    static ポイントセンサー: SubWeapon = new SubWeapon("ポイントセンサー", `${SubWeapons.image_url}/sub_17.png`);
    static トラップ: SubWeapon = new SubWeapon("トラップ", `${SubWeapons.image_url}/sub_15.png`);
    static カーリングボム: SubWeapon = new SubWeapon("カーリングボム", `${SubWeapons.image_url}/sub_13.png`);
    static ロボットボム: SubWeapon = new SubWeapon("ロボットボム", `${SubWeapons.image_url}/sub_14.png`);
    static ポイズンミスト: SubWeapon = new SubWeapon("ポイズンミスト", `${SubWeapons.image_url}/sub_16.png`);
    static タンサンボム: SubWeapon = new SubWeapon("タンサンボム", `${SubWeapons.image_url}/sub_21.png`);
    static トーピード: SubWeapon = new SubWeapon("トーピード", `${SubWeapons.image_url}/sub_22.png`);
}

export const subWeaponList: SubWeapon[] = [
    SubWeapons.スプラッシュボム,
    SubWeapons.キューバンボム,
    SubWeapons.クイックボム,
    SubWeapons.スプリンクラー,
    SubWeapons.ジャンプビーコン,
    SubWeapons.スプラッシュシールド,
    SubWeapons.ポイントセンサー,
    SubWeapons.トラップ,
    SubWeapons.カーリングボム,
    SubWeapons.ロボットボム,
    SubWeapons.ポイズンミスト,
    SubWeapons.タンサンボム,
    SubWeapons.トーピード,
];
