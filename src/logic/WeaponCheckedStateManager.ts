import { WeaponCategory, mainWeaponList } from "../splatoonSupport/weapons/MainWeapon";

const localStorageKey = "SelectedPageState";

export interface WeaponCheckedState {
	[weaponName: string]: boolean,
}

export default class WeaponCheckedStateManager {
	private static instance = new WeaponCheckedStateManager();

	private _shooterStates: WeaponCheckedState;
	private _maneuverStates: WeaponCheckedState;
	private _chargerStates: WeaponCheckedState;
	private _blasterStates: WeaponCheckedState;
	private _rollerStates: WeaponCheckedState;
	private _brushStates: WeaponCheckedState;
	private _slosherStates: WeaponCheckedState;
	private _spinnerStates: WeaponCheckedState;
	private _shelterStates: WeaponCheckedState;

	get shooterStates() { return this._shooterStates; }
	get maneuverStates() { return this._maneuverStates; }
	get chargerStates() { return this._chargerStates; }
	get blasterStates() { return this._blasterStates; }
	get rollerStates() { return this._rollerStates; }
	get brushStates() { return this._brushStates; }
	get slosherStates() { return this._slosherStates; }
	get spinnerStates() { return this._spinnerStates; }
	get shelterStates() { return this._shelterStates; }

	private constructor() {
		const jsonOnStorage = localStorage.getItem(localStorageKey);

		if (jsonOnStorage === null) {
			this._shooterStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Shooter).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._maneuverStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Maneuver).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._chargerStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Charger).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._blasterStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Blaster).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._rollerStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Roller).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._brushStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Brush).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._slosherStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Slosher).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._spinnerStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Spinner).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));

			this._shelterStates = mainWeaponList
				.filter(w => w.Category === WeaponCategory.Shelter).map(w => ({ [w.Name]: true }))
				.reduce((prev, curr) => ({ ...prev, ...curr }));
		}
		else {
			const obj = JSON.parse(jsonOnStorage);

			this._shooterStates = obj._shooterStates;
			this._maneuverStates = obj._maneuverStates;
			this._chargerStates = obj._chargerStates;
			this._blasterStates = obj._blasterStates;
			this._rollerStates = obj._rollerStates;
			this._brushStates = obj._brushStates;
			this._slosherStates = obj._slosherStates;
			this._spinnerStates = obj._spinnerStates;
			this._shelterStates = obj._shelterStates;
		}
	}

	public static getInstance(): WeaponCheckedStateManager {
		return WeaponCheckedStateManager.instance;
	}

	public setCheckedState(name: string, checked: boolean) {
		if (name in this.shooterStates) this.shooterStates[name] = checked;
		else if (name in this._maneuverStates) this._maneuverStates[name] = checked;
		else if (name in this._chargerStates) this._chargerStates[name] = checked;
		else if (name in this._blasterStates) this._blasterStates[name] = checked;
		else if (name in this._rollerStates) this._rollerStates[name] = checked;
		else if (name in this._brushStates) this._brushStates[name] = checked;
		else if (name in this._slosherStates) this._slosherStates[name] = checked;
		else if (name in this._spinnerStates) this._spinnerStates[name] = checked;
		else if (name in this._shelterStates) this._shelterStates[name] = checked;

		this.WriteToLocalStorage();
	}

	public setAllCheckedState(state: boolean, category: WeaponCategory) {
		let targetobj: WeaponCheckedState = {};
		switch (category) {
			case WeaponCategory.Shooter:
				targetobj = this._shooterStates;
				break;
			case WeaponCategory.Maneuver:
				targetobj = this._maneuverStates;
				break;
			case WeaponCategory.Charger:
				targetobj = this._chargerStates;
				break;
			case WeaponCategory.Blaster:
				targetobj = this._blasterStates;
				break;
			case WeaponCategory.Roller:
				targetobj = this._rollerStates;
				break;
			case WeaponCategory.Brush:
				targetobj = this._brushStates;
				break;
			case WeaponCategory.Slosher:
				targetobj = this._slosherStates;
				break;
			case WeaponCategory.Spinner:
				targetobj = this._spinnerStates;
				break;
			case WeaponCategory.Shelter:
				targetobj = this._shelterStates;
				break;
		}

		for (let key in targetobj) {
			targetobj[key] = state;
		}

		this.WriteToLocalStorage();
	}

	public getCheckedWeaponNames(): string[] {
		const res = [];
		res.push(...Object.keys(this.shooterStates).filter(key => this.shooterStates[key]));
		res.push(...Object.keys(this.maneuverStates).filter(key => this.maneuverStates[key]));
		res.push(...Object.keys(this.chargerStates).filter(key => this.chargerStates[key]));
		res.push(...Object.keys(this.blasterStates).filter(key => this.blasterStates[key]));
		res.push(...Object.keys(this.rollerStates).filter(key => this.rollerStates[key]));
		res.push(...Object.keys(this.brushStates).filter(key => this.brushStates[key]));
		res.push(...Object.keys(this.slosherStates).filter(key => this.slosherStates[key]));
		res.push(...Object.keys(this.spinnerStates).filter(key => this.spinnerStates[key]));
		res.push(...Object.keys(this.shelterStates).filter(key => this.shelterStates[key]));

		return res;
	}

	private WriteToLocalStorage(): void {
		localStorage.setItem(localStorageKey, JSON.stringify(this));
	}
}