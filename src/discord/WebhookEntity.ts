// declare global {
//     interface Date {
//         toJSON(key?: any): string;
//     }
// }

Date.prototype.toJSON = function (key?: any) {
    function pad(number: number): string {
        if (number < 10) {
            return '0' + number;
        }
        return number.toString();
    }

    return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '';
}

/**
 * Webhookに送信するボディを構成するクラス。
 */
export default class WebhookEntity {
    content: string;
    username: string;
    avatar_url: string;
    embeds: EmbedObject[];

    constructor(content: string, username: string, avatar_url: string, embeds: EmbedObject[]) {
        this.content = content;
        this.username = username;
        this.avatar_url = avatar_url;
        this.embeds = embeds;
    }
}

/**
 * Webhookのembedsプロパティの配列要素を構成するクラス。
 */
export class EmbedObject {
    title?: string;
    type?: string = "rich";
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: EmbedColor;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedImage;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];

    constructor(
        title?: string,
        type?: string,
        description?: string,
        url?: string,
        timestamp?: Date,
        color?: EmbedColor,
        footer?: EmbedFooter,
        image?: EmbedImage,
        thumbnail?: EmbedImage,
        video?: EmbedVideo,
        provider?: EmbedProvider,
        author?: EmbedAuthor,
        fields?: EmbedField[],
    ) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.url = url;
        this.timestamp = timestamp;
        this.color = color;
        this.footer = footer;
        this.image = image;
        this.thumbnail = thumbnail;
        this.video = video;
        this.provider = provider;
        this.author = author;
        this.fields = fields;
    }
}

/**
 * EmbedObjectで指定する色のクラス。
 */
export class EmbedColor {
    red: number;
    green: number;
    blue: number;

    /**
     * 0 <= x <= 255範囲外の入力値が与えられた場合、下限、または上限に
     * 近いほうの値に変換する。
     * @param red R Colorを指定する
     * @param green G Colorを指定する
     * @param blue B Colorを指定する
     */
    constructor(red: number, green: number, blue: number) {
        if (red < 0) {
            red = 0;
        }
        if (255 < red) {
            red = 255;
        }
        if (green < 0) {
            green = 0;
        }
        if (255 < green) {
            green = 255;
        }
        if (blue < 0) {
            blue = 0;
        }
        if (255 < blue) {
            blue = 255;
        }

        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * カラーコードを整数へ変換する。
     * JSON.stringify()がこのクラスに対して呼び出された場合、
     * JSON文字列の代わりにこのメソッドに定義された処理が実行されて返却される。
     */
    public toJSON(): number {
        return this.red * 65536 + this.green * 256 + this.blue;
    }
}

/**
 * EmbedObjectのfooterプロパティを構成するクラス。
 */
export class EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_url?: string;

    constructor(text: string, icon_url?: string, proxy_url?: string) {
        this.text = text;
        this.icon_url = icon_url;
        this.proxy_url = proxy_url;
    }
}

/**
 * EmbedObjectのimageプロパティを構成するクラス。
 * thumbnailプロパティもこのクラスを利用する。
 */
export class EmbedImage {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;

    constructor(url?: string, proxy_url?: string, height?: number, width?: number) {
        this.url = url;
        this.proxy_url = proxy_url;
        this.height = height;
        this.width = width;
    }
}

/**
 * EmbedObjectのvideoプロパティを構成するクラス。
 */
export class EmbedVideo {
    url?: string;
    height?: number;
    width?: number;

    constructor(url?: string, height?: number, width?: number) {
        this.url = url;
        this.height = height;
        this.width = width;
    }
}

/**
 * EmbedObjectのproviderプロパティを構成するクラス。
 */
export class EmbedProvider {
    name?: string;
    url?: string;

    constructor(name?: string, url?: string) {
        this.name = name;
        this.url = url;
    }
}

/**
 * EmbedObjectのauthorプロパティを構成するクラス。
 */
export class EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;

    constructor(name?: string, url?: string, icon_url?: string, proxy_icon_url?: string) {
        this.name = name;
        this.url = url;
        this.icon_url = icon_url;
        this.proxy_icon_url = proxy_icon_url;
    }
}

/**
 * EmbedObjectのfieldsプロパティの配列要素を構成するクラス。
 */
export class EmbedField {
    name: string;
    value: string;
    inline?: boolean;

    constructor(name: string, value: string, inline?: boolean) {
        this.name = name;
        this.value = value;
        this.inline = inline;
    }
}