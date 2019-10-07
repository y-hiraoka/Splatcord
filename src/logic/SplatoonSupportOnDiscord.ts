import * as randomWeapons from "../splatoonSupport/randomWeapons";
import executeWebhook from "../discordAccess/Webhook";
import WebhookEntity, * as we from "../discordAccess/WebhookEntity";
import { MainWeapon, WeaponCategory, mainWeaponListWithHeroWeapons } from "../splatoonSupport/weapons/MainWeapon";
import { SubWeapon } from "../splatoonSupport/weapons/SubWeapon";
import { SpecialWeapon } from "../splatoonSupport/weapons/SpecialWeapon";
import WebhookTokenManager from "./WebhookTokenManager";
import WeaponCheckedStateManager from "./WeaponCheckedStateManager";
import { GearPower } from "../splatoonSupport/weapons/gearPower";
import { randomGearPower } from "../splatoonSupport/randomWeapons";

const tokenManager = WebhookTokenManager.getInstance();
const checkStateManager = WeaponCheckedStateManager.getInstance();

/**
 * Main,Sub,SpecialWeaponクラスからWebhookEntityを生成する。
 * @param weapons Main,Sub,SpecialWeaponクラスの配列。
 */
function createWebhookEntityfromWeapons(weapons: (MainWeapon | SubWeapon | SpecialWeapon)[]): WebhookEntity {
    const entity = new WebhookEntity(
        "次に使うブキを選んだよ！\r\nhttps://stin-dev.github.io/hello-splatoon-bot/",
        "SplatoonSupport",
        "https://stin-dev.github.io/hosting/tanimoto4.jpg",
        weapons.map(value => {
            return new we.EmbedObject(
                value.name,
                undefined,
                (value instanceof MainWeapon) ? `${value.subWeapon.name}\r\n${value.specialWeapon.name}` : undefined,
                undefined,
                new Date(),
                new we.EmbedColor(0xda, 0x81, 0xf5),
                new we.EmbedFooter("created by @stin_stin", "https://stin-dev.github.io/hosting/tanimoto3.jpg"),
                undefined,
                new we.EmbedImage(value.image_url),
                undefined,
                undefined,
                undefined,
                undefined,
            );
        }));

    return entity;
}

async function send(entity: WebhookEntity): Promise<string> {
    const token = tokenManager.getSelectedToken();

    if (token === undefined) {
        return "Tokenが選択されていません";
    }

    return await executeWebhook(token.webhookId, token.webhookToken, entity);
}

/**
 * メインブキをランダムで4つ選択してDiscordに送信する。
 */
export async function sendMainWeapons(): Promise<string> {
    const weapons = randomWeapons.randomMainWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * 指定されたブキカテゴリの中からメインブキをランダムで4つ選択して
 * Discordに送信する。
 */
export async function sendMainWeaponsInCategory(category: WeaponCategory): Promise<string> {
    const weapons = randomWeapons.randomWeaponInCategory(category);
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * サブウェポンをランダムで4つ選択してDiscordに送信する。
 */
export async function sendSubWeapons(): Promise<string> {
    const weapons = randomWeapons.randomSubWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * スペシャルウェポンをランダムで4つ選択してDiscordに送信する。
 */
export async function sendSpecialWeapons(): Promise<string> {
    const weapons = randomWeapons.randomSpecialWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * チャージャー系から1つ、それ以外から3つランダムに選択してDiscordに送信する。
 */
export async function sendMainWeaponsWithOneCharger(): Promise<string> {
    const weapons = randomWeapons.randomMainWithOneCharger();
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * 指定されたサブウェポンが搭載されたメインブキをランダムで
 * 4つ選択してDiscordに送信する
 * @param subName サブウェポンの名称
 */
export async function sendMainInSpecificSub(subName: string): Promise<string> {
    const weapons = randomWeapons.randomMainInSpecificSub(subName);
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

/**
 * 指定されたスペシャルウェポンが搭載されたメインブキをランダムで
 * 4つ選択してDiscordに送信する
 * @param specialName スペシャルウェポンの名称
 */
export async function sendMainInSpecificSpecial(specialName: string): Promise<string> {
    const weapons = randomWeapons.randomMainInSpecificSpecial(specialName);
    const entity = createWebhookEntityfromWeapons(weapons);
    return await send(entity);
}

export async function sendMainInSelectableAll(): Promise<string> {
    const checkedState = checkStateManager.getCheckedWeaponNames();
    const checkedWeapons = mainWeaponListWithHeroWeapons.filter(w => checkedState.includes(w.name)).atRandom(4);
    const entity = createWebhookEntityfromWeapons(checkedWeapons);
    return await send(entity);
}

export async function sendGreetingfromTanimoto(): Promise<string> {
    const tanimotoAge = getAge(1999, 11, 16);
    const entity = new WebhookEntity(
        "",
        "谷本安美",
        "https://stin-dev.github.io/hosting/tanimoto1.jpg",
        [new we.EmbedObject(
            undefined,
            undefined,
            `北海道出身、${tanimotoAge}歳の谷本安美です！`,
            undefined,
            new Date(),
            new we.EmbedColor(0xda, 0x81, 0xf5),
            new we.EmbedFooter("created by @stin_stin", "https://stin-dev.github.io/hosting/tanimoto3.jpg"),
            new we.EmbedImage("https://stin-dev.github.io/hosting/tanimoto5.jpg"),
            undefined,
            new we.EmbedVideo("https://youtu.be/yP9adC2yB5U")
        )],
    );

    return await send(entity);
}

function getAge(year: number, month: number, day: number): number {

    //誕生年月日
    var birthday = new Date(year, month - 1, day);

    //今日
    var today = new Date();

    //今年の誕生日
    var thisYearBirthday =
        new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    //今年-誕生年
    var age = today.getFullYear() - birthday.getFullYear();

    //今年の誕生日を迎えていなければage-1を返す
    return (today < thisYearBirthday) ? age - 1 : age;
}

/**
 * Main,Sub,SpecialWeaponクラスからWebhookEntityを生成する。
 * @param weapons Main,Sub,SpecialWeaponクラスの配列。
 */
function createEmbedObjectfromGearPower(gear: GearPower, type: "head" | "clothes" | "shoes"): we.EmbedObject {
    let title = "";
    if (type === "head") title = "アタマ";
    if (type === "clothes") title = "フク";
    if (type === "shoes") title = "クツ";

    return new we.EmbedObject(
        title,
        undefined,
        gear.name,
        undefined,
        new Date(),
        new we.EmbedColor(0xda, 0x81, 0xf5),
        new we.EmbedFooter("created by @stin_stin", "https://stin-dev.github.io/hosting/tanimoto3.jpg"),
        undefined,
        new we.EmbedImage(gear.image_url),
        undefined,
        undefined,
        undefined,
        undefined,
    );
}

export async function sendGearPower(): Promise<string> {
    const gears = randomGearPower();

    const entity = new WebhookEntity(
        "次に使うギアパワーを選んだよ！\r\nhttps://stin-dev.github.io/hello-splatoon-bot/",
        "SplatoonSupport",
        "https://stin-dev.github.io/hosting/tanimoto4.jpg",
        [
            createEmbedObjectfromGearPower(gears.head, "head"),
            createEmbedObjectfromGearPower(gears.clothes, "clothes"),
            createEmbedObjectfromGearPower(gears.shoes, "shoes"),
            new we.EmbedObject(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new we.EmbedColor(255, 0, 0),
                undefined,
                new we.EmbedImage("https://stin-dev.github.io/hosting/splatoon2/gear/sayashiriho.jpg"))
        ]
    );

    return await send(entity);
}