/**
 * スペシャルウェポンクラス。
 */
export class SpecialWeapon {
    name: string;
    image_url?: string;

    constructor(name: string, image_url?:string) {
        this.name = name;
        this.image_url = image_url;
    }

    public toString():string {
        return `スペシャルウェポン：${this.name}`;
    }
}

export default class SpecialWeapons {
    static ジェットパック: SpecialWeapon = new SpecialWeapon("ジェットパック");
    static スーパーチャクチ: SpecialWeapon = new SpecialWeapon("スーパーチャクチ");
    static マルチミサイル: SpecialWeapon = new SpecialWeapon("マルチミサイル");
    static ハイパープレッサー: SpecialWeapon = new SpecialWeapon("ハイパープレッサー");
    static アメフラシ: SpecialWeapon = new SpecialWeapon("アメフラシ");
    static インクアーマー: SpecialWeapon = new SpecialWeapon("インクアーマー");
    static イカスフィア: SpecialWeapon = new SpecialWeapon("イカスフィア");
    static バブルランチャー: SpecialWeapon = new SpecialWeapon("バブルランチャー");
    static ナイスダマ: SpecialWeapon = new SpecialWeapon("ナイスダマ");
    static ウルトラハンコ: SpecialWeapon = new SpecialWeapon("ウルトラハンコ");
    static スプラッシュボムピッチャー: SpecialWeapon = new SpecialWeapon("スプラッシュボムピッチャー");
    static キューバンボムピッチャー: SpecialWeapon = new SpecialWeapon("キューバンボムピッチャー");
    static カーリングボムピッチャー: SpecialWeapon = new SpecialWeapon("カーリングボムピッチャー");
    static ロボボムピッチャー: SpecialWeapon = new SpecialWeapon("ロボボムピッチャー");
    static クイックボムピッチャー: SpecialWeapon = new SpecialWeapon("クイックボムピッチャー");
}

export const specialWeaponList: SpecialWeapon[] = [
    SpecialWeapons.ジェットパック,
    SpecialWeapons.スーパーチャクチ,
    SpecialWeapons.マルチミサイル,
    SpecialWeapons.ハイパープレッサー,
    SpecialWeapons.アメフラシ,
    SpecialWeapons.インクアーマー,
    SpecialWeapons.バブルランチャー,
    SpecialWeapons.ナイスダマ,
    SpecialWeapons.ウルトラハンコ,
    SpecialWeapons.スプラッシュボムピッチャー,
    SpecialWeapons.キューバンボムピッチャー,
    SpecialWeapons.カーリングボムピッチャー,
    SpecialWeapons.ロボボムピッチャー,
    SpecialWeapons.クイックボムピッチャー,
];