import { SubWeapons, SubWeapon } from "./SubWeapon";
import { SpecialWeapons, SpecialWeapon } from "./SpecialWeapon";

/** categories of main weapons. */
export enum WeaponCategory {
    Shooter,
    Maneuver,
    Charger,
    Blaster,
    Roller,
    Brush,
    Slosher,
    Spinner,
    Shelter,
}

/** Main Weapon class. */
export class MainWeapon {
    constructor(
        private name: string,
        private subWeapon: SubWeapon,
        private specialWeapon: SpecialWeapon,
        private category: WeaponCategory,
        private imageUrl?: string,
        private isReplica: boolean = false,
    ) { }

    get Name() { return this.name; }
    get SubWeapon() { return this.subWeapon; }
    get SpecialWeapon() { return this.specialWeapon; }
    get Category() { return this.category; }
    get ImageUrl() { return this.imageUrl; }
    get IsReplica() { return this.isReplica; }

    public toSring(): string {
        return `メイン：${this.name} ${this.subWeapon.toString()} ${this.specialWeapon.toString()}`;
    }
}

export class MainWeapons {
    private static imageUrl = "https://stin-dev.github.io/hosting/splatoon2/main";

    static スプラシューターコラボ: MainWeapon = new MainWeapon("スプラシューターコラボ", SubWeapons.スプラッシュボム, SpecialWeapons.ジェットパック, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_1.png`);
    static _52ガロン: MainWeapon = new MainWeapon(".52ガロン", SubWeapons.ポイントセンサー, SpecialWeapons.イカスフィア, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_19.png`);
    static わかばシューター: MainWeapon = new MainWeapon("わかばシューター", SubWeapons.スプラッシュボム, SpecialWeapons.インクアーマー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_10.png`);
    static オクタシューターレプリカ: MainWeapon = new MainWeapon("オクタシューターレプリカ", SubWeapons.スプラッシュボム, SpecialWeapons.ジェットパック, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_3.png`, true);
    static _96ガロンデコ: MainWeapon = new MainWeapon(".96ガロンデコ", SubWeapons.スプラッシュシールド, SpecialWeapons.スーパーチャクチ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_28.png`);
    static シャープマーカー: MainWeapon = new MainWeapon("シャープマーカー", SubWeapons.ポイズンミスト, SpecialWeapons.ジェットパック, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_8.png`);
    static N_ZAP89: MainWeapon = new MainWeapon("N-ZAP89", SubWeapons.ロボットボム, SpecialWeapons.マルチミサイル, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_17.png`);
    static N_ZAP85: MainWeapon = new MainWeapon("N-ZAP85", SubWeapons.キューバンボム, SpecialWeapons.インクアーマー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_16.png`);
    static プライムシューター: MainWeapon = new MainWeapon("プライムシューター", SubWeapons.ポイントセンサー, SpecialWeapons.アメフラシ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_5.png`);
    static シャープマーカーネオ: MainWeapon = new MainWeapon("シャープマーカーネオ", SubWeapons.クイックボム, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_9.png`);
    static ボールドマーカー: MainWeapon = new MainWeapon("ボールドマーカー", SubWeapons.カーリングボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_32.png`);
    static ボールドマーカーネオ: MainWeapon = new MainWeapon("ボールドマーカーネオ", SubWeapons.ジャンプビーコン, SpecialWeapons.マルチミサイル, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_33.png`);
    static プロモデラーRG: MainWeapon = new MainWeapon("プロモデラーRG", SubWeapons.スプリンクラー, SpecialWeapons.イカスフィア, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_14.png`);
    static スプラシューター: MainWeapon = new MainWeapon("スプラシューター", SubWeapons.クイックボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_0.png`);
    static _52ガロンデコ: MainWeapon = new MainWeapon(".52ガロンデコ", SubWeapons.カーリングボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_20.png`);
    static L3リールガンD: MainWeapon = new MainWeapon("L3リールガンD", SubWeapons.クイックボム, SpecialWeapons.ジェットパック, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_25.png`);
    static ジェットスイーパーカスタム: MainWeapon = new MainWeapon("ジェットスイーパーカスタム", SubWeapons.クイックボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_23.png`);
    static プライムシューターコラボ: MainWeapon = new MainWeapon("プライムシューターコラボ", SubWeapons.キューバンボム, SpecialWeapons.バブルランチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_6.png`);
    static もみじシューター: MainWeapon = new MainWeapon("もみじシューター", SubWeapons.ロボットボム, SpecialWeapons.アメフラシ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_11.png`);
    static プロモデラーMG: MainWeapon = new MainWeapon("プロモデラーMG", SubWeapons.キューバンボム, SpecialWeapons.カーリングボムピッチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_13.png`);
    static H3リールガンチェリー: MainWeapon = new MainWeapon("H3リールガンチェリー", SubWeapons.スプラッシュシールド, SpecialWeapons.バブルランチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_31.png`);
    static _96ガロン: MainWeapon = new MainWeapon(".96ガロン", SubWeapons.スプリンクラー, SpecialWeapons.インクアーマー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_27.png`);
    static ボールドマーカー7: MainWeapon = new MainWeapon("ボールドマーカー7", SubWeapons.スプラッシュボム, SpecialWeapons.ウルトラハンコ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_34.png`);
    static N_ZAP83: MainWeapon = new MainWeapon("N-ZAP83", SubWeapons.スプリンクラー, SpecialWeapons.アメフラシ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_18.png`);
    static ヒーローシューターレプリカ: MainWeapon = new MainWeapon("ヒーローシューターレプリカ", SubWeapons.クイックボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_2.png`, true);
    static L3リールガン: MainWeapon = new MainWeapon("L3リールガン", SubWeapons.カーリングボム, SpecialWeapons.イカスフィア, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_24.png`);
    static ジェットスイーパー: MainWeapon = new MainWeapon("ジェットスイーパー", SubWeapons.ポイズンミスト, SpecialWeapons.マルチミサイル, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_22.png`);
    static H3リールガン: MainWeapon = new MainWeapon("H3リールガン", SubWeapons.ポイントセンサー, SpecialWeapons.マルチミサイル, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_29.png`);
    static プロモデラーPG: MainWeapon = new MainWeapon("プロモデラーPG", SubWeapons.クイックボム, SpecialWeapons.ナイスダマ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_15.png`);
    static H3リールガンD: MainWeapon = new MainWeapon("H3リールガンD", SubWeapons.キューバンボム, SpecialWeapons.インクアーマー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_30.png`);
    static ボトルガイザー: MainWeapon = new MainWeapon("ボトルガイザー", SubWeapons.スプラッシュシールド, SpecialWeapons.ハイパープレッサー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_35.png`);
    static ボトルガイザーフォイル: MainWeapon = new MainWeapon("ボトルガイザーフォイル", SubWeapons.スプラッシュボム, SpecialWeapons.バブルランチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_36.png`);
    static スプラシューターベッチュー: MainWeapon = new MainWeapon("スプラシューターベッチュー", SubWeapons.キューバンボム, SpecialWeapons.マルチミサイル, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_4.png`);
    static プライムシューターベッチュー: MainWeapon = new MainWeapon("プライムシューターベッチュー", SubWeapons.スプラッシュボム, SpecialWeapons.ナイスダマ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_7.png`);
    static おちばシューター: MainWeapon = new MainWeapon("おちばシューター", SubWeapons.トーピード, SpecialWeapons.バブルランチャー, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_12.png`);
    static L3リールガンベッチュー: MainWeapon = new MainWeapon("L3リールガンベッチュー", SubWeapons.スプラッシュシールド, SpecialWeapons.ウルトラハンコ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_26.png`);
    static _52ガロンベッチュー: MainWeapon = new MainWeapon(".52ガロンベッチュー", SubWeapons.スプラッシュシールド, SpecialWeapons.ナイスダマ, WeaponCategory.Shooter, `${MainWeapons.imageUrl}/weapon_21.png`);
    static デュアルスイーパー: MainWeapon = new MainWeapon("デュアルスイーパー", SubWeapons.ポイントセンサー, SpecialWeapons.マルチミサイル, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_123.png`);
    static デュアルスイーパーカスタム: MainWeapon = new MainWeapon("デュアルスイーパーカスタム", SubWeapons.スプラッシュボム, SpecialWeapons.アメフラシ, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_124.png`);
    static スプラマニューバー: MainWeapon = new MainWeapon("スプラマニューバー", SubWeapons.クイックボム, SpecialWeapons.マルチミサイル, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_116.png`);
    static スプラマニューバーコラボ: MainWeapon = new MainWeapon("スプラマニューバーコラボ", SubWeapons.カーリングボム, SpecialWeapons.ジェットパック, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_117.png`);
    static スパッタリー: MainWeapon = new MainWeapon("スパッタリー", SubWeapons.ジャンプビーコン, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_120.png`);
    static ヒーローマニューバーレプリカ: MainWeapon = new MainWeapon("ヒーローマニューバーレプリカ", SubWeapons.クイックボム, SpecialWeapons.マルチミサイル, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_118.png`, true);
    static ケルビン525: MainWeapon = new MainWeapon("ケルビン525", SubWeapons.トラップ, SpecialWeapons.ジェットパック, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_125.png`);
    static スパッタリー_ヒュー: MainWeapon = new MainWeapon("スパッタリー・ヒュー", SubWeapons.ポイズンミスト, SpecialWeapons.アメフラシ, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_121.png`);
    static クアッドホッパーブラック: MainWeapon = new MainWeapon("クアッドホッパーブラック", SubWeapons.ロボットボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_128.png`);
    static ケルビン525デコ: MainWeapon = new MainWeapon("ケルビン525デコ", SubWeapons.スプラッシュシールド, SpecialWeapons.イカスフィア, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_126.png`);
    static クアッドホッパーホワイト: MainWeapon = new MainWeapon("クアッドホッパーホワイト", SubWeapons.スプリンクラー, SpecialWeapons.ロボボムピッチャー, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_129.png`);
    static スプラマニューバーベッチュー: MainWeapon = new MainWeapon("スプラマニューバーベッチュー", SubWeapons.キューバンボム, SpecialWeapons.イカスフィア, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_119.png`);
    static ケルビン525ベッチュー: MainWeapon = new MainWeapon("ケルビン525ベッチュー", SubWeapons.タンサンボム, SpecialWeapons.インクアーマー, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_127.png`);
    static スパッタリークリア: MainWeapon = new MainWeapon("スパッタリークリア", SubWeapons.トーピード, SpecialWeapons.スーパーチャクチ, WeaponCategory.Maneuver, `${MainWeapons.imageUrl}/weapon_122.png`);
    static スプラスコープ: MainWeapon = new MainWeapon("スプラスコープ", SubWeapons.スプラッシュボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_72.png`);
    static スクイックリンα: MainWeapon = new MainWeapon("スクイックリンα", SubWeapons.ポイントセンサー, SpecialWeapons.インクアーマー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_84.png`);
    static スプラチャージャー: MainWeapon = new MainWeapon("スプラチャージャー", SubWeapons.スプラッシュボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_71.png`);
    static _14式竹筒銃_甲: MainWeapon = new MainWeapon("14式竹筒銃・甲", SubWeapons.カーリングボム, SpecialWeapons.マルチミサイル, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_87.png`);
    static ヒーローチャージャーレプリカ: MainWeapon = new MainWeapon("ヒーローチャージャーレプリカ", SubWeapons.スプラッシュボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_75.png`, true);
    static スクイックリンγ: MainWeapon = new MainWeapon("スクイックリンγ", SubWeapons.キューバンボム, SpecialWeapons.ジェットパック, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_86.png`);
    static _14式竹筒銃_丙: MainWeapon = new MainWeapon("14式竹筒銃・丙", SubWeapons.タンサンボム, SpecialWeapons.バブルランチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_89.png`);
    static スクイックリンβ: MainWeapon = new MainWeapon("スクイックリンβ", SubWeapons.ロボットボム, SpecialWeapons.イカスフィア, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_85.png`);
    static _14式竹筒銃_乙: MainWeapon = new MainWeapon("14式竹筒銃・乙", SubWeapons.ポイズンミスト, SpecialWeapons.クイックボムピッチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_88.png`);
    static ソイチューバー: MainWeapon = new MainWeapon("ソイチューバー", SubWeapons.キューバンボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_82.png`);
    static スプラチャージャーコラボ: MainWeapon = new MainWeapon("スプラチャージャー コラボ", SubWeapons.スプラッシュシールド, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_73.png`);
    static スプラスコープコラボ: MainWeapon = new MainWeapon("スプラスコープ コラボ", SubWeapons.スプラッシュシールド, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_74.png`);
    static リッター4K: MainWeapon = new MainWeapon("リッター4K", SubWeapons.トラップ, SpecialWeapons.アメフラシ, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_78.png`);
    static _4Kスコープ: MainWeapon = new MainWeapon("4Kスコープ", SubWeapons.トラップ, SpecialWeapons.アメフラシ, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_79.png`);
    static リッター4kカスタム: MainWeapon = new MainWeapon("リッター4kカスタム", SubWeapons.ジャンプビーコン, SpecialWeapons.バブルランチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_80.png`);
    static _4kスコープカスタム: MainWeapon = new MainWeapon("4kスコープカスタム", SubWeapons.ジャンプビーコン, SpecialWeapons.バブルランチャー, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_81.png`);
    static ソイチューバーカスタム: MainWeapon = new MainWeapon("ソイチューバーカスタム", SubWeapons.カーリングボム, SpecialWeapons.ジェットパック, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_83.png`);
    static スプラチャージャーベッチュー: MainWeapon = new MainWeapon("スプラチャージャーベッチュー", SubWeapons.スプリンクラー, SpecialWeapons.イカスフィア, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_76.png`);
    static スプラスコープベッチュー: MainWeapon = new MainWeapon("スプラスコープベッチュー", SubWeapons.スプリンクラー, SpecialWeapons.イカスフィア, WeaponCategory.Charger, `${MainWeapons.imageUrl}/weapon_77.png`);
    static ノヴァブラスターネオ: MainWeapon = new MainWeapon("ノヴァブラスターネオ", SubWeapons.トラップ, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_44.png`);
    static ロングブラスターカスタム: MainWeapon = new MainWeapon("ロングブラスターカスタム", SubWeapons.カーリングボム, SpecialWeapons.バブルランチャー, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_51.png`);
    static ホットブラスターカスタム: MainWeapon = new MainWeapon("ホットブラスターカスタム", SubWeapons.ロボットボム, SpecialWeapons.ジェットパック, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_38.png`);
    static ノヴァブラスター: MainWeapon = new MainWeapon("ノヴァブラスター", SubWeapons.スプラッシュボム, SpecialWeapons.イカスフィア, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_43.png`);
    static ラピッドブラスター: MainWeapon = new MainWeapon("ラピッドブラスター", SubWeapons.トラップ, SpecialWeapons.スプラッシュボムピッチャー, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_40.png`);
    static ロングブラスターネクロ: MainWeapon = new MainWeapon("ロングブラスターネクロ", SubWeapons.クイックボム, SpecialWeapons.マルチミサイル, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_52.png`);
    static ホットブラスター: MainWeapon = new MainWeapon("ホットブラスター", SubWeapons.ポイズンミスト, SpecialWeapons.スーパーチャクチ, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_37.png`);
    static Rブラスターエリートデコ: MainWeapon = new MainWeapon("Rブラスターエリートデコ", SubWeapons.スプラッシュシールド, SpecialWeapons.インクアーマー, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_49.png`);
    static Rブラスターエリート: MainWeapon = new MainWeapon("Rブラスターエリート", SubWeapons.ポイズンミスト, SpecialWeapons.アメフラシ, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_48.png`);
    static ラピッドブラスターデコ: MainWeapon = new MainWeapon("ラピッドブラスターデコ", SubWeapons.キューバンボム, SpecialWeapons.ジェットパック, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_41.png`);
    static ロングブラスター: MainWeapon = new MainWeapon("ロングブラスター", SubWeapons.キューバンボム, SpecialWeapons.アメフラシ, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_50.png`);
    static クラッシュブラスター: MainWeapon = new MainWeapon("クラッシュブラスター", SubWeapons.スプラッシュボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_46.png`);
    static ヒーローブラスターレプリカ: MainWeapon = new MainWeapon("ヒーローブラスターレプリカ", SubWeapons.ポイズンミスト, SpecialWeapons.スーパーチャクチ, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_39.png`, true);
    static クラッシュブラスターネオ: MainWeapon = new MainWeapon("クラッシュブラスターネオ", SubWeapons.カーリングボム, SpecialWeapons.マルチミサイル, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_47.png`);
    static ノヴァブラスターベッチュー: MainWeapon = new MainWeapon("ノヴァブラスターベッチュー", SubWeapons.タンサンボム, SpecialWeapons.アメフラシ, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_45.png`);
    static ラピッドブラスターベッチュー: MainWeapon = new MainWeapon("ラピッドブラスターベッチュー", SubWeapons.トーピード, SpecialWeapons.イカスフィア, WeaponCategory.Blaster, `${MainWeapons.imageUrl}/weapon_42.png`);
    static ダイナモローラー: MainWeapon = new MainWeapon("ダイナモローラー", SubWeapons.トラップ, SpecialWeapons.ハイパープレッサー, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_57.png`);
    static スプラローラーコラボ: MainWeapon = new MainWeapon("スプラローラーコラボ", SubWeapons.ジャンプビーコン, SpecialWeapons.イカスフィア, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_54.png`);
    static カーボンローラー: MainWeapon = new MainWeapon("カーボンローラー", SubWeapons.ロボットボム, SpecialWeapons.アメフラシ, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_60.png`);
    static ダイナモローラーテスラ: MainWeapon = new MainWeapon("ダイナモローラーテスラ", SubWeapons.スプラッシュボム, SpecialWeapons.インクアーマー, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_58.png`);
    static スプラローラー: MainWeapon = new MainWeapon("スプラローラー", SubWeapons.カーリングボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_53.png`);
    static カーボンローラーデコ: MainWeapon = new MainWeapon("カーボンローラーデコ", SubWeapons.クイックボム, SpecialWeapons.ロボボムピッチャー, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_61.png`);
    static ヒーローローラーレプリカ: MainWeapon = new MainWeapon("ヒーローローラーレプリカ", SubWeapons.カーリングボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_55.png`, true);
    static ヴァリアブルローラー: MainWeapon = new MainWeapon("ヴァリアブルローラー", SubWeapons.スプラッシュシールド, SpecialWeapons.スプラッシュボムピッチャー, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_62.png`);
    static ヴァリアブルローラーフォイル: MainWeapon = new MainWeapon("ヴァリアブルローラーフォイル", SubWeapons.キューバンボム, SpecialWeapons.マルチミサイル, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_63.png`);
    static スプラローラーベッチュー: MainWeapon = new MainWeapon("スプラローラーベッチュー", SubWeapons.スプラッシュボム, SpecialWeapons.バブルランチャー, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_56.png`);
    static ダイナモローラーベッチュー: MainWeapon = new MainWeapon("ダイナモローラーベッチュー", SubWeapons.スプリンクラー, SpecialWeapons.ナイスダマ, WeaponCategory.Roller, `${MainWeapons.imageUrl}/weapon_59.png`);
    static ホクサイ: MainWeapon = new MainWeapon("ホクサイ", SubWeapons.ロボットボム, SpecialWeapons.ジェットパック, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_64.png`);
    static パブロ: MainWeapon = new MainWeapon("パブロ", SubWeapons.スプラッシュボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_68.png`);
    static ホクサイ_ヒュー: MainWeapon = new MainWeapon("ホクサイ・ヒュー", SubWeapons.ジャンプビーコン, SpecialWeapons.マルチミサイル, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_66.png`);
    static パーマネント_パブロ: MainWeapon = new MainWeapon("パーマネント・パブロ", SubWeapons.スプリンクラー, SpecialWeapons.インクアーマー, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_70.png`);
    static パブロ_ヒュー: MainWeapon = new MainWeapon("パブロ・ヒュー", SubWeapons.トラップ, SpecialWeapons.イカスフィア, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_69.png`);
    static ヒーローブラシレプリカ: MainWeapon = new MainWeapon("ヒーローブラシレプリカ", SubWeapons.ロボットボム, SpecialWeapons.ジェットパック, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_65.png`, true);
    static ホクサイベッチュー: MainWeapon = new MainWeapon("ホクサイベッチュー", SubWeapons.キューバンボム, SpecialWeapons.ウルトラハンコ, WeaponCategory.Brush, `${MainWeapons.imageUrl}/weapon_67.png`);
    static バケットスロッシャー: MainWeapon = new MainWeapon("バケットスロッシャー", SubWeapons.キューバンボム, SpecialWeapons.マルチミサイル, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_90.png`);
    static ヒッセン: MainWeapon = new MainWeapon("ヒッセン", SubWeapons.クイックボム, SpecialWeapons.インクアーマー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_94.png`);
    static スクリュースロッシャー: MainWeapon = new MainWeapon("スクリュースロッシャー", SubWeapons.ロボットボム, SpecialWeapons.ハイパープレッサー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_96.png`);
    static バケットスロッシャーデコ: MainWeapon = new MainWeapon("バケットスロッシャーデコ", SubWeapons.スプリンクラー, SpecialWeapons.イカスフィア, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_92.png`);
    static バケットスロッシャーソーダ: MainWeapon = new MainWeapon("バケットスロッシャーソーダ", SubWeapons.スプラッシュボム, SpecialWeapons.クイックボムピッチャー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_93.png`);
    static ヒッセン_ヒュー: MainWeapon = new MainWeapon("ヒッセン・ヒュー", SubWeapons.スプラッシュボム, SpecialWeapons.アメフラシ, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_95.png`);
    static スクリュースロッシャーネオ: MainWeapon = new MainWeapon("スクリュースロッシャーネオ", SubWeapons.ポイントセンサー, SpecialWeapons.スプラッシュボムピッチャー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_97.png`);
    static ヒーロースロッシャーレプリカ: MainWeapon = new MainWeapon("ヒーロースロッシャーレプリカ", SubWeapons.キューバンボム, SpecialWeapons.マルチミサイル, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_91.png`, true);
    static エクスプロッシャー: MainWeapon = new MainWeapon("エクスプロッシャー", SubWeapons.スプリンクラー, SpecialWeapons.バブルランチャー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_99.png`);
    static オーバーフロッシャー: MainWeapon = new MainWeapon("オーバーフロッシャー", SubWeapons.スプラッシュシールド, SpecialWeapons.アメフラシ, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_101.png`);
    static スクリュースロッシャーベッチュー: MainWeapon = new MainWeapon("スクリュースロッシャーベッチュー", SubWeapons.タンサンボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_98.png`);
    static エクスプロッシャーカスタム: MainWeapon = new MainWeapon("エクスプロッシャーカスタム", SubWeapons.ポイントセンサー, SpecialWeapons.イカスフィア, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_100.png`);
    static オーバーフロッシャーデコ: MainWeapon = new MainWeapon("オーバーフロッシャーデコ", SubWeapons.スプリンクラー, SpecialWeapons.キューバンボムピッチャー, WeaponCategory.Slosher, `${MainWeapons.imageUrl}/weapon_102.png`);
    static スプラスピナーコラボ: MainWeapon = new MainWeapon("スプラスピナーコラボ", SubWeapons.カーリングボム, SpecialWeapons.アメフラシ, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_108.png`);
    static バレルスピナーデコ: MainWeapon = new MainWeapon("バレルスピナーデコ", SubWeapons.スプラッシュシールド, SpecialWeapons.バブルランチャー, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_105.png`);
    static ハイドラントカスタム: MainWeapon = new MainWeapon("ハイドラントカスタム", SubWeapons.トラップ, SpecialWeapons.インクアーマー, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_111.png`);
    static バレルスピナー: MainWeapon = new MainWeapon("バレルスピナー", SubWeapons.スプリンクラー, SpecialWeapons.ハイパープレッサー, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_103.png`);
    static バレルスピナーリミックス: MainWeapon = new MainWeapon("バレルスピナーリミックス", SubWeapons.ポイントセンサー, SpecialWeapons.ナイスダマ, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_106.png`);
    static ハイドラント: MainWeapon = new MainWeapon("ハイドラント", SubWeapons.ロボットボム, SpecialWeapons.スーパーチャクチ, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_110.png`);
    static スプラスピナー: MainWeapon = new MainWeapon("スプラスピナー", SubWeapons.クイックボム, SpecialWeapons.マルチミサイル, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_107.png`);
    static ヒーロースピナーレプリカ: MainWeapon = new MainWeapon("ヒーロースピナーレプリカ", SubWeapons.スプリンクラー, SpecialWeapons.ハイパープレッサー, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_104.png`);
    static クーゲルシュライバー: MainWeapon = new MainWeapon("クーゲルシュライバー", SubWeapons.ポイズンミスト, SpecialWeapons.ジェットパック, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_112.png`, true);
    static ノーチラス47: MainWeapon = new MainWeapon("ノーチラス47", SubWeapons.ポイントセンサー, SpecialWeapons.イカスフィア, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_114.png`);
    static クーゲルシュライバー_ヒュー: MainWeapon = new MainWeapon("クーゲルシュライバー・ヒュー", SubWeapons.ジャンプビーコン, SpecialWeapons.アメフラシ, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_113.png`);
    static ノーチラス79: MainWeapon = new MainWeapon("ノーチラス79", SubWeapons.キューバンボム, SpecialWeapons.ジェットパック, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_115.png`);
    static スプラスピナーベッチュー: MainWeapon = new MainWeapon("スプラスピナーベッチュー", SubWeapons.ポイズンミスト, SpecialWeapons.ウルトラハンコ, WeaponCategory.Spinner, `${MainWeapons.imageUrl}/weapon_109.png`);
    static パラシェルター: MainWeapon = new MainWeapon("パラシェルター", SubWeapons.スプリンクラー, SpecialWeapons.アメフラシ, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_130.png`);
    static ヒーローシェルターレプリカ: MainWeapon = new MainWeapon("ヒーローシェルターレプリカ", SubWeapons.スプリンクラー, SpecialWeapons.アメフラシ, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_131.png`, true);
    static キャンピングシェルター: MainWeapon = new MainWeapon("キャンピングシェルター", SubWeapons.ジャンプビーコン, SpecialWeapons.バブルランチャー, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_133.png`);
    static スパイガジェット: MainWeapon = new MainWeapon("スパイガジェット", SubWeapons.トラップ, SpecialWeapons.スーパーチャクチ, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_136.png`);
    static パラシェルターソレーラ: MainWeapon = new MainWeapon("パラシェルターソレーラ", SubWeapons.ロボットボム, SpecialWeapons.スプラッシュボムピッチャー, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_132.png`);
    static スパイガジェットソレーラ: MainWeapon = new MainWeapon("スパイガジェットソレーラ", SubWeapons.スプラッシュボム, SpecialWeapons.イカスフィア, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_137.png`);
    static キャンピングシェルターソレーラ: MainWeapon = new MainWeapon("キャンピングシェルターソレーラ", SubWeapons.スプラッシュシールド, SpecialWeapons.カーリングボムピッチャー, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_134.png`);
    static スパイガジェットベッチュー: MainWeapon = new MainWeapon("スパイガジェットベッチュー", SubWeapons.トーピード, SpecialWeapons.インクアーマー, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_138.png`);
    static キャンピングシェルターカーモ: MainWeapon = new MainWeapon("キャンピングシェルターカーモ", SubWeapons.トラップ, SpecialWeapons.ウルトラハンコ, WeaponCategory.Shelter, `${MainWeapons.imageUrl}/weapon_135.png`);
}

/** A list of all main weapons. */
export const mainWeaponList: MainWeapon[] = [
    MainWeapons.スプラシューターコラボ,
    MainWeapons._52ガロン,
    MainWeapons.わかばシューター,
    MainWeapons.オクタシューターレプリカ,
    MainWeapons._96ガロンデコ,
    MainWeapons.シャープマーカー,
    MainWeapons.N_ZAP89,
    MainWeapons.N_ZAP85,
    MainWeapons.プライムシューター,
    MainWeapons.シャープマーカーネオ,
    MainWeapons.ボールドマーカー,
    MainWeapons.ボールドマーカーネオ,
    MainWeapons.プロモデラーRG,
    MainWeapons.スプラシューター,
    MainWeapons._52ガロンデコ,
    MainWeapons.L3リールガンD,
    MainWeapons.ジェットスイーパーカスタム,
    MainWeapons.プライムシューターコラボ,
    MainWeapons.もみじシューター,
    MainWeapons.プロモデラーMG,
    MainWeapons.H3リールガンチェリー,
    MainWeapons._96ガロン,
    MainWeapons.ボールドマーカー7,
    MainWeapons.N_ZAP83,
    MainWeapons.ヒーローシューターレプリカ,
    MainWeapons.L3リールガン,
    MainWeapons.ジェットスイーパー,
    MainWeapons.H3リールガン,
    MainWeapons.プロモデラーPG,
    MainWeapons.H3リールガンD,
    MainWeapons.ボトルガイザー,
    MainWeapons.ボトルガイザーフォイル,
    MainWeapons.スプラシューターベッチュー,
    MainWeapons.プライムシューターベッチュー,
    MainWeapons.おちばシューター,
    MainWeapons.L3リールガンベッチュー,
    MainWeapons._52ガロンベッチュー,
    MainWeapons.デュアルスイーパー,
    MainWeapons.デュアルスイーパーカスタム,
    MainWeapons.スプラマニューバー,
    MainWeapons.スプラマニューバーコラボ,
    MainWeapons.スパッタリー,
    MainWeapons.ヒーローマニューバーレプリカ,
    MainWeapons.ケルビン525,
    MainWeapons.スパッタリー_ヒュー,
    MainWeapons.クアッドホッパーブラック,
    MainWeapons.ケルビン525デコ,
    MainWeapons.クアッドホッパーホワイト,
    MainWeapons.スプラマニューバーベッチュー,
    MainWeapons.ケルビン525ベッチュー,
    MainWeapons.スパッタリークリア,
    MainWeapons.スプラスコープ,
    MainWeapons.スクイックリンα,
    MainWeapons.スプラチャージャー,
    MainWeapons._14式竹筒銃_甲,
    MainWeapons.ヒーローチャージャーレプリカ,
    MainWeapons.スクイックリンγ,
    MainWeapons._14式竹筒銃_丙,
    MainWeapons.スクイックリンβ,
    MainWeapons._14式竹筒銃_乙,
    MainWeapons.ソイチューバー,
    MainWeapons.スプラチャージャーコラボ,
    MainWeapons.スプラスコープコラボ,
    MainWeapons.リッター4K,
    MainWeapons._4Kスコープ,
    MainWeapons.リッター4kカスタム,
    MainWeapons._4kスコープカスタム,
    MainWeapons.ソイチューバーカスタム,
    MainWeapons.スプラチャージャーベッチュー,
    MainWeapons.スプラスコープベッチュー,
    MainWeapons.ノヴァブラスターネオ,
    MainWeapons.ロングブラスターカスタム,
    MainWeapons.ホットブラスターカスタム,
    MainWeapons.ノヴァブラスター,
    MainWeapons.ラピッドブラスター,
    MainWeapons.ロングブラスターネクロ,
    MainWeapons.ホットブラスター,
    MainWeapons.Rブラスターエリートデコ,
    MainWeapons.Rブラスターエリート,
    MainWeapons.ラピッドブラスターデコ,
    MainWeapons.ロングブラスター,
    MainWeapons.クラッシュブラスター,
    MainWeapons.ヒーローブラスターレプリカ,
    MainWeapons.クラッシュブラスターネオ,
    MainWeapons.ノヴァブラスターベッチュー,
    MainWeapons.ラピッドブラスターベッチュー,
    MainWeapons.ダイナモローラー,
    MainWeapons.スプラローラーコラボ,
    MainWeapons.カーボンローラー,
    MainWeapons.ダイナモローラーテスラ,
    MainWeapons.スプラローラー,
    MainWeapons.カーボンローラーデコ,
    MainWeapons.ヒーローローラーレプリカ,
    MainWeapons.ヴァリアブルローラー,
    MainWeapons.ヴァリアブルローラーフォイル,
    MainWeapons.スプラローラーベッチュー,
    MainWeapons.ダイナモローラーベッチュー,
    MainWeapons.ホクサイ,
    MainWeapons.パブロ,
    MainWeapons.ホクサイ_ヒュー,
    MainWeapons.パーマネント_パブロ,
    MainWeapons.パブロ_ヒュー,
    MainWeapons.ヒーローブラシレプリカ,
    MainWeapons.ホクサイベッチュー,
    MainWeapons.バケットスロッシャー,
    MainWeapons.ヒッセン,
    MainWeapons.スクリュースロッシャー,
    MainWeapons.バケットスロッシャーデコ,
    MainWeapons.バケットスロッシャーソーダ,
    MainWeapons.ヒッセン_ヒュー,
    MainWeapons.スクリュースロッシャーネオ,
    MainWeapons.ヒーロースロッシャーレプリカ,
    MainWeapons.エクスプロッシャー,
    MainWeapons.オーバーフロッシャー,
    MainWeapons.スクリュースロッシャーベッチュー,
    MainWeapons.エクスプロッシャーカスタム,
    MainWeapons.オーバーフロッシャーデコ,
    MainWeapons.スプラスピナーコラボ,
    MainWeapons.バレルスピナーデコ,
    MainWeapons.ハイドラントカスタム,
    MainWeapons.バレルスピナー,
    MainWeapons.バレルスピナーリミックス,
    MainWeapons.ハイドラント,
    MainWeapons.スプラスピナー,
    MainWeapons.ヒーロースピナーレプリカ,
    MainWeapons.クーゲルシュライバー,
    MainWeapons.ノーチラス47,
    MainWeapons.クーゲルシュライバー_ヒュー,
    MainWeapons.ノーチラス79,
    MainWeapons.スプラスピナーベッチュー,
    MainWeapons.パラシェルター,
    MainWeapons.ヒーローシェルターレプリカ,
    MainWeapons.キャンピングシェルター,
    MainWeapons.スパイガジェット,
    MainWeapons.パラシェルターソレーラ,
    MainWeapons.スパイガジェットソレーラ,
    MainWeapons.キャンピングシェルターソレーラ,
    MainWeapons.スパイガジェットベッチュー,
    MainWeapons.キャンピングシェルターカーモ,
];

/** A list of all main weapons excluding hero weapons. */
export const mainWeaponListExcludingHeroWeapons: MainWeapon[] = mainWeaponList.filter(weapon => !weapon.IsReplica);
