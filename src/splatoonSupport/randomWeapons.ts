import { MainWeapon, mainWeaponList, WeaponCategory } from "./weapons/MainWeapon";
import { subWeaponList, SubWeapon } from "./weapons/SubWeapon";
import { SpecialWeapon, specialWeaponList } from "./weapons/SpecialWeapon";

declare global {
    interface Array<T> {
        /**
         * 引数で指定された個数だけ無作為に復元抽出する。
         * 元の配列の状態は維持される。
         * @param num 抽出する個数
         */
        atRandom(num: number): T[];

        /**
         * 配列の要素の順番をランダムに入れ替える。
         */
        shuffle(): void;
    }
}

Array.prototype.atRandom = function (num: number) {
    let list = [];

    for (let i = 0; i < num; i++) {
        list.push(this[Math.floor(Math.random() * this.length)]);
    }

    return list;
}

Array.prototype.shuffle = function() {
    for(let i = this.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = this[i];
        this[i] = this[r];
        this[r] = tmp;
    }
}


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
    return mainWeaponList.filter(weapon => weapon.category === category).atRandom(4);
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
    let notChargers = mainWeaponList.filter(weapon => weapon.category !== WeaponCategory.Charger).atRandom(3);
    let charger = mainWeaponList.filter(weapon => weapon.category === WeaponCategory.Charger).atRandom(1);
    let result = notChargers.concat(charger);
    result.shuffle();
    return result;
}

/**
 * 指定されたサブウェポンが搭載されたメインブキをランダムで4つ返却する
 * @param subName サブウェポンの名称
 */
export function randomMainInSpecificSub(subName:string): MainWeapon[] {
    return mainWeaponList.filter(weapon => weapon.subWeapon.name === subName).atRandom(4);
}

/**
 * 指定されたスペシャルウェポンが搭載されたメインブキをランダムで4つ返却する
 * @param specialName スペシャルウェポンの名称
 */
export function randomMainInSpecificSpecial(specialName:string): MainWeapon[] {
    return mainWeaponList.filter(weapon => weapon.specialWeapon.name === specialName).atRandom(4);
}