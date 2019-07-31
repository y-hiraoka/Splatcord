import * as randomWeapons from "../splatoonSupport/randomWeapons";
import executeWebhook from "../discordAccess/Webhook";
import WebhookEntity, * as we from "../discordAccess/WebhookEntity";
import { MainWeapon, WeaponCategory } from "../splatoonSupport/weapons/MainWeapon";
import { SubWeapon } from "../splatoonSupport/weapons/SubWeapon";
import { SpecialWeapon } from "../splatoonSupport/weapons/SpecialWeapon";

const webhookId = "603940938620076064";
const webhookToken = "vivd_NhUbe5XrxO97dmFAOhsVMif2lB1-9IXyCuR1ot7B0JNRC4mU9slkybderSeXztI";

// テスト用
// https://discordapp.com/api/webhooks/601012228501798913/pXmFunEV5aR_2XCPyaLPImpZ_xaA-47RiB92KudyGLl-QTsoCvr8nSQb7uQu2njdJ_tX
//const webhookId = "601012228501798913";
//const webhookToken = "pXmFunEV5aR_2XCPyaLPImpZ_xaA-47RiB92KudyGLl-QTsoCvr8nSQb7uQu2njdJ_tX";

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

async function send(entity: WebhookEntity): Promise<void> {
    await executeWebhook(webhookId, webhookToken, entity);
}

/**
 * メインブキをランダムで4つ選択してDiscordに送信する。
 */
export function sendMainWeapons(): void {
    const weapons = randomWeapons.randomMainWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
    send(entity);
}

/**
 * 指定されたブキカテゴリの中からメインブキをランダムで4つ選択して
 * Discordに送信する。
 */
export function sendMainWeaponsInCategory(category: WeaponCategory): void {
    const weapons = randomWeapons.randomWeaponInCategory(category);
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

/**
 * サブウェポンをランダムで4つ選択してDiscordに送信する。
 */
export function sendSubWeapons(): void {
    const weapons = randomWeapons.randomSubWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

/**
 * スペシャルウェポンをランダムで4つ選択してDiscordに送信する。
 */
export function sendSpecialWeapons(): void {
    const weapons = randomWeapons.randomSpecialWeapon();
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

/**
 * チャージャー系から1つ、それ以外から3つランダムに選択してDiscordに送信する。
 */
export function sendMainWeaponsWithOneCharger(): void {
    const weapons = randomWeapons.randomMainWithOneCharger();
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

/**
 * 指定されたサブウェポンが搭載されたメインブキをランダムで
 * 4つ選択してDiscordに送信する
 * @param subName サブウェポンの名称
 */
export function sendMainInSpecificSub(subName: string): void {
    const weapons = randomWeapons.randomMainInSpecificSub(subName);
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

/**
 * 指定されたスペシャルウェポンが搭載されたメインブキをランダムで
 * 4つ選択してDiscordに送信する
 * @param specialName スペシャルウェポンの名称
 */
export function sendMainInSpecificSpecial(specialName: string): void {
    const weapons = randomWeapons.randomMainInSpecificSpecial(specialName);
    const entity = createWebhookEntityfromWeapons(weapons);
   send(entity);
}

export function sendGreetingfromTanimoto(): void {
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

    send(entity);
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
