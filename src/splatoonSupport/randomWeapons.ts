import "./extensions";
import { MainWeapon, mainWeaponList, WeaponCategory } from "./weapons/MainWeapon";
import { subWeaponList, SubWeapon } from "./weapons/SubWeapon";
import { SpecialWeapon, specialWeaponList } from "./weapons/SpecialWeapon";
import { gearPowerList } from "./weapons/gearPower";

/**
 * MainWeaponインスタンスを4つランダムに返却する
 */
export function randomMainWeapon(): MainWeapon[] {
  return mainWeaponList.atRandom(4);
}

/**
 * 指定したCategoryに該当するMainWeaponインスタンスを4つランダムに返却する
 * @param category カテゴリ
 */
export function randomWeaponInCategory(category: WeaponCategory): MainWeapon[] {
  return mainWeaponList.filter(weapon => weapon.Category === category).atRandom(4);
}

/**
 * SubWeaponインスタンスを4つランダムに返却する
 */
export function randomSubWeapon(): SubWeapon[] {
  return subWeaponList.atRandom(4);
}

/**
 * SpecialWeaponインスタンスを4つ返却する
 */
export function randomSpecialWeapon(): SpecialWeapon[] {
  return specialWeaponList.atRandom(4);
}

/**
 *  チャージャー系のMainWeaponを1つ、それ以外のMainWeaponを3つ返却する
 */
export function randomMainWithOneCharger(): MainWeapon[] {
  let notChargers = mainWeaponList.filter(weapon => weapon.Category !== WeaponCategory.Charger).atRandom(3);
  let charger = mainWeaponList.filter(weapon => weapon.Category === WeaponCategory.Charger).atRandom(1);
  let result = notChargers.concat(charger);
  result.shuffle();
  return result;
}

/**
 * 指定されたサブウェポンが搭載されたメインブキをランダムで4つ返却する
 * @param subName サブウェポンの名称
 */
export function randomMainInSpecificSub(subName: string): MainWeapon[] {
  return mainWeaponList.filter(weapon => weapon.SubWeapon.Name === subName).atRandom(4);
}

/**
 * 指定されたスペシャルウェポンが搭載されたメインブキをランダムで4つ返却する
 * @param specialName スペシャルウェポンの名称
 */
export function randomMainInSpecificSpecial(specialName: string): MainWeapon[] {
  return mainWeaponList.filter(weapon => weapon.SpecialWeapon.Name === specialName).atRandom(4);
}

/**
 * アタマ、フク、クツのギアパワーをそれぞれランダムにひとつ返却する
 */
export function randomGearPower() {
  const head = gearPowerList.filter(gear => gear.Part === "all" || gear.Part === "head").atRandom(1);
  const clothes = gearPowerList.filter(gear => gear.Part === "all" || gear.Part === "clothes").atRandom(1);
  const shoes = gearPowerList.filter(gear => gear.Part === "all" || gear.Part === "shoes").atRandom(1);

  return {
    head: head[0],
    clothes: clothes[0],
    shoes: shoes[0],
  }
}
