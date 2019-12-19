type partType = "head" | "clothes" | "shoes" | "all";

export class GearPower {
	constructor(
		private name: string,
		private part: partType,
		private imageUrl?: string,
	) { }

	get Name() { return this.name; }
	get Part() { return this.part; }
	get ImageUrl() { return this.imageUrl; }
}

export class GearPowers {
	private static image_url = "https://stin-dev.github.io/hosting/splatoon2/gear";

	static インク効率アップ_メイン_ = new GearPower("インク効率アップ(メイン)", "all", `${GearPowers.image_url}/02.png`)
	static インク効率アップ_サブ_ = new GearPower("インク効率アップ(サブ)", "all", `${GearPowers.image_url}/03.png`)
	static インク回復力アップ = new GearPower("インク回復力アップ", "all", `${GearPowers.image_url}/01.png`)
	static ヒト移動速度アップ = new GearPower("ヒト移動速度アップ", "all", `${GearPowers.image_url}/07.png`)
	static イカダッシュ速度アップ = new GearPower("イカダッシュ速度アップ", "all", `${GearPowers.image_url}/07.png`)
	static スペシャル増加量アップ = new GearPower("スペシャル増加量アップ", "all", `${GearPowers.image_url}/10.png`)
	static スペシャル減少量ダウン = new GearPower("スペシャル減少量ダウン", "all", `${GearPowers.image_url}/11.png`)
	static スペシャル性能アップ = new GearPower("スペシャル性能アップ", "all", `${GearPowers.image_url}/05.png`)
	static 復活時間短縮 = new GearPower("復活時間短縮", "all", `${GearPowers.image_url}/12.png`)
	static スーパージャンプ時間短縮 = new GearPower("スーパージャンプ時間短縮", "all", `${GearPowers.image_url}/13.png`)
	static サブ性能アップ = new GearPower("サブ性能アップ", "all", `${GearPowers.image_url}/04.png`)
	static 相手インク影響軽減 = new GearPower("相手インク影響軽減", "all", `${GearPowers.image_url}/08.png`)
	static 爆風ダメージ軽減_改 = new GearPower("爆風ダメージ軽減・改", "all", `${GearPowers.image_url}/09.png`)
	static メイン性能アップ = new GearPower("メイン性能アップ", "all", `${GearPowers.image_url}/14.png`)
	static スタートダッシュ = new GearPower("スタートダッシュ", "head", `${GearPowers.image_url}/H_03.png`)
	static ラストスパート = new GearPower("ラストスパート", "head", `${GearPowers.image_url}/H_04.png`)
	static 逆境強化 = new GearPower("逆境強化", "head", `${GearPowers.image_url}/H_01.png`)
	static カムバック = new GearPower("カムバック", "head", `${GearPowers.image_url}/H_02.png`)
	static イカニンジャ = new GearPower("イカニンジャ", "clothes", `${GearPowers.image_url}/M_01.png`)
	static リベンジ = new GearPower("リベンジ", "clothes", `${GearPowers.image_url}/M_04.png`)
	static サーマルインク = new GearPower("サーマルインク", "clothes", `${GearPowers.image_url}/M_03.png`)
	static 復活ペナルティアップ = new GearPower("復活ペナルティアップ", "clothes", `${GearPowers.image_url}/M_04.png`)
	static 追加ギアパワー倍加 = new GearPower("追加ギアパワー倍加", "clothes", `${GearPowers.image_url}/M_05.png`)
	static ステルスジャンプ = new GearPower("ステルスジャンプ", "shoes", `${GearPowers.image_url}/L_01.png`)
	static 対物攻撃力アップ = new GearPower("対物攻撃力アップ", "shoes", `${GearPowers.image_url}/L_02.png`)
	static 受け身術 = new GearPower("受け身術", "shoes", `${GearPowers.image_url}/L_03.png`)
}

export const gearPowerList = [
	GearPowers.インク効率アップ_メイン_,
	GearPowers.インク効率アップ_サブ_,
	GearPowers.インク回復力アップ,
	GearPowers.ヒト移動速度アップ,
	GearPowers.イカダッシュ速度アップ,
	GearPowers.スペシャル増加量アップ,
	GearPowers.スペシャル減少量ダウン,
	GearPowers.スペシャル性能アップ,
	GearPowers.復活時間短縮,
	GearPowers.スーパージャンプ時間短縮,
	GearPowers.サブ性能アップ,
	GearPowers.相手インク影響軽減,
	GearPowers.爆風ダメージ軽減_改,
	GearPowers.メイン性能アップ,
	GearPowers.スタートダッシュ,
	GearPowers.ラストスパート,
	GearPowers.逆境強化,
	GearPowers.カムバック,
	GearPowers.イカニンジャ,
	GearPowers.リベンジ,
	GearPowers.サーマルインク,
	GearPowers.復活ペナルティアップ,
	GearPowers.追加ギアパワー倍加,
	GearPowers.ステルスジャンプ,
	GearPowers.対物攻撃力アップ,
	GearPowers.受け身術,
];