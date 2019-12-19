import * as randomWeapons from "../splatoonSupport/randomWeapons";
import { WebhookClient, WebhookExecutionObject, EmbedObject } from "../discord";
import { MainWeapon, WeaponCategory, mainWeaponList } from "../splatoonSupport/weapons/MainWeapon";
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
function createWebhookEntityfromWeapons(weapons: (MainWeapon | SubWeapon | SpecialWeapon)[]): WebhookExecutionObject {
  const entity: WebhookExecutionObject = {
    content: "次に使うブキを選んだよ！\r\nhttps://splatcord.web.app/",
    username: "Splatcord",
    avatar_url: "https://stin-dev.github.io/hosting/tanimoto4.jpg",
    embeds: weapons.map<EmbedObject>(weapon => {
      const description = (weapon instanceof MainWeapon)
        ? `${weapon.SubWeapon.Name}\r\n${weapon.SpecialWeapon.Name}`
        : undefined;

      return {
        title: weapon.Name,
        description: description,
        timestamp: new Date(),
        color: 14320117,
        footer: {
          text: "created by @stin_factory",
          icon_url: "https://stin-dev.github.io/hosting/tanimoto3.jpg",
        },
        thumbnail: { url: weapon.ImageUrl },
      };
    }),
  };

  return entity;
}

async function send(entity: WebhookExecutionObject): Promise<string> {
  const token = tokenManager.getSelectedToken();

  if (token === undefined) {
    return "Tokenが選択されていません";
  }

  const client = new WebhookClient(token.webhookId, token.webhookToken);

  try {
    await client.executeWebhook(entity);

    return "success";
  } catch (error) {
    return "WebhookIdまたはWebhookTokenが間違っています";
  }
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
  const checkedWeapons = mainWeaponList.filter(w => checkedState.includes(w.Name)).atRandom(4);
  const entity = createWebhookEntityfromWeapons(checkedWeapons);
  return await send(entity);
}

export async function sendGreetingfromTanimoto(): Promise<string> {
  const tanimotoAge = getAge(1999, 11, 16);

  const entity: WebhookExecutionObject = {
    content: "",
    username: "谷本安美",
    avatar_url: "https://stin-dev.github.io/hosting/tanimoto1.jpg",
    embeds: [{
      description: `北海道出身、${tanimotoAge}歳の谷本安美です！`,
      timestamp: new Date(),
      color: 14320117,
      footer: {
        text: "created by @stin_factory",
        icon_url: "https://stin-dev.github.io/hosting/tanimoto3.jpg",
      },
      image: { url: "https://stin-dev.github.io/hosting/tanimoto5.jpg" }
    }],
  };

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
function createEmbedObjectfromGearPower(gear: GearPower, type: "head" | "clothes" | "shoes"): EmbedObject {
  let title = "";
  if (type === "head") title = "アタマ";
  if (type === "clothes") title = "フク";
  if (type === "shoes") title = "クツ";

  return {
    title: title,
    description: gear.Name,
    timestamp: new Date(),
    color: 14320117,
    footer: {
      text: "created by @stin_factory",
      icon_url: "https://stin-dev.github.io/hosting/tanimoto3.jpg",
    },
    thumbnail: { url: gear.ImageUrl },
  };
}

export async function sendGearPower(): Promise<string> {
  const gears = randomGearPower();

  const entity: WebhookExecutionObject = {
    content: "次に使うギアパワーを選んだよ！\r\nhttps://splatcord.web.app/",
    username: "Splatcord",
    avatar_url: "https://stin-dev.github.io/hosting/tanimoto4.jpg",
    embeds: [
      createEmbedObjectfromGearPower(gears.head, "head"),
      createEmbedObjectfromGearPower(gears.clothes, "clothes"),
      createEmbedObjectfromGearPower(gears.shoes, "shoes"),
    ],
  };

  return await send(entity);
}