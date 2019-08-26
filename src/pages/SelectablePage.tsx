import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Container, Fab, FormControlLabel, Switch, List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, useMediaQuery } from '@material-ui/core';
import { WeaponCategory } from '../splatoonSupport/weapons/MainWeapon';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WeaponCheckedStateManager, { WeaponCheckedState } from '../logic/WeaponCheckedStateManager';
import { sendMainInSelectableAll } from '../logic/SplatoonSupportOnDiscord';
import SendingResultDialog from '../components/SendingResultDialog';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 800,
			marginLeft: "auto",
			marginRight: "auto",
			backgroundColor: theme.palette.background.paper,
		},
		list: {
			width: '100%',
		},
		fab: {
			position: "fixed",
			zIndex: 99,
		},
		fabposition_small: {
			bottom: theme.spacing(9),
			right: theme.spacing(2),
		},
		fabposition_large: {
			bottom: theme.spacing(9),
			right: theme.spacing(4),
		},
		fabContainer: {
			width: "100%",
			position: "fixed",
		},
		spacing: {
			height: theme.spacing(7),
		},
		buttonArea: {
			height: theme.spacing(6),
		},
	}),
);

export default function SelectablePage() {
	const classes = useStyles();
	const theme = useTheme();
	const {
		shootersState, onChangeshooter, allShootersChecked, onClickSetAllShootersChecked,
		maneuversState, onChangemaneuver, allManeuversChecked, onClickSetAllManeuversChecked,
		chargersState, onChangecharger, allChargersChecked, onClickSetAllChargersChecked,
		blastersState, onChangeblaster, allBlastersChecked, onClickSetAllBlastersChecked,
		rollersState, onChangeroller, allRollersChecked, onClickSetAllRollersChecked,
		brushesState, onChangebrush, allBrushesChecked, onClickSetAllBrushesChecked,
		sloshersState, onChangeslosher, allSloshersChecked, onClickSetAllSloshersChecked,
		spinnersState, onChangespinner, allSpinnersChecked, onClickSetAllSpinnersChecked,
		sheltersState, onChangeshelter, allSheltersChecked, onClickSetAllSheltersChecked,
		onFabClick,
		dialogOpen,
		dialogMessage, dialogIcon,
		onDialogClose,
	} = useSelectablePageState();

	function buildExpansionPanel(
		subheader: string,
		states: WeaponCheckedState,
		onCheckedChanged: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
		allChecked: boolean,
		onSelectAllClicked: (event: React.ChangeEvent<HTMLInputElement>) => void) {
		const jsxList = [];

		for (let weaponName in states) {
			const jsx = (
				<ListItem key={weaponName}>
					<ListItemText primary={weaponName} />
					<ListItemSecondaryAction>
						<Switch
							edge="end"
							onChange={onCheckedChanged(weaponName)}
							checked={states[weaponName]}
							color="primary"
							value={`checked${weaponName}`}
						/>
					</ListItemSecondaryAction>
				</ListItem>
			);

			jsxList.push(jsx);
		}

		return (
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<ListSubheader>{subheader}</ListSubheader>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<List className={classes.list}>
						<ListItem className={classes.buttonArea} key="SelectAll">
							<ListItemSecondaryAction>
								<FormControlLabel
									control={
										<Switch
											edge="end"
											color="secondary"
											checked={allChecked}
											onChange={onSelectAllClicked}>
											all
									</Switch>
									}
									label="全選択/全解除"
									labelPlacement="start"
								/>
							</ListItemSecondaryAction>
						</ListItem>
						{jsxList}
					</List>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}

	return (
		<React.Fragment>
			<Fab className={clsx(classes.fab, useMediaQuery(theme.breakpoints.up("sm")) ? classes.fabposition_large : classes.fabposition_small)}
				aria-label="run"
				color="secondary"
				onClick={onFabClick}>
				<SendIcon />
			</Fab>
			<Container className={classes.root}>
				{buildExpansionPanel("シューター", shootersState, onChangeshooter, allShootersChecked, onClickSetAllShootersChecked)}
				{buildExpansionPanel("マニューバー", maneuversState, onChangemaneuver, allManeuversChecked, onClickSetAllManeuversChecked)}
				{buildExpansionPanel("チャージャー", chargersState, onChangecharger, allChargersChecked, onClickSetAllChargersChecked)}
				{buildExpansionPanel("ブラスター", blastersState, onChangeblaster, allBlastersChecked, onClickSetAllBlastersChecked)}
				{buildExpansionPanel("ローラー", rollersState, onChangeroller, allRollersChecked, onClickSetAllRollersChecked)}
				{buildExpansionPanel("フデ", brushesState, onChangebrush, allBrushesChecked, onClickSetAllBrushesChecked)}
				{buildExpansionPanel("スロッシャー", sloshersState, onChangeslosher, allSloshersChecked, onClickSetAllSloshersChecked)}
				{buildExpansionPanel("スピナー", spinnersState, onChangespinner, allSpinnersChecked, onClickSetAllSpinnersChecked)}
				{buildExpansionPanel("シェルター", sheltersState, onChangeshelter, allSheltersChecked, onClickSetAllSheltersChecked)}
			</Container>
			<SendingResultDialog
				open={dialogOpen}
				resultMessage={dialogMessage}
				variant={dialogIcon}
				onClose={onDialogClose} />
			<div className={classes.spacing} />
		</React.Fragment>
	);
}


const manager = WeaponCheckedStateManager.getInstance();

function useSelectablePageState(): State {
	const [shooters, setShooters] = React.useState(manager.shooterStates);
	const [allShootersChecked, setAllShootersChecked] = React.useState(isAnyChecked(shooters));
	const [maneuvers, setManeuvers] = React.useState(manager.maneuverStates);
	const [allManeuversChecked, setAllManeuversChecked] = React.useState(isAnyChecked(maneuvers));
	const [chargers, setChargers] = React.useState(manager.chargerStates);
	const [allChargersChecked, setAllChargersChecked] = React.useState(isAnyChecked(chargers));
	const [blasters, setBlasters] = React.useState(manager.blasterStates);
	const [allBlastersChecked, setAllBlastersChecked] = React.useState(isAnyChecked(blasters));
	const [rollers, setRollers] = React.useState(manager.rollerStates);
	const [allRollersChecked, setAllRollersChecked] = React.useState(isAnyChecked(rollers));
	const [brushes, setBrushes] = React.useState(manager.brushStates);
	const [allBrushesChecked, setAllBrushesChecked] = React.useState(isAnyChecked(brushes));
	const [sloshers, setSloshers] = React.useState(manager.slosherStates);
	const [allSloshersChecked, setAllSloshersChecked] = React.useState(isAnyChecked(sloshers));
	const [spinners, setSpinners] = React.useState(manager.spinnerStates);
	const [allSpinnersChecked, setAllSpinnersChecked] = React.useState(isAnyChecked(spinners));
	const [shelters, setShelters] = React.useState(manager.shelterStates);
	const [allSheltersChecked, setAllSheltersChecked] = React.useState(isAnyChecked(shelters));

	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogMessage, setDialogMessage] = React.useState("");
	const [dialogIcon, setDialogIcon] = React.useState<"success" | "warning" | "error" | "info">("success");

	const onChangeWeaponState = (category: WeaponCategory) => (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		let targetSetter: (value: React.SetStateAction<WeaponCheckedState>) => void = () => { };
		switch (category) {
			case WeaponCategory.Shooter:
				targetSetter = setShooters;
				break;
			case WeaponCategory.Maneuver:
				targetSetter = setManeuvers;
				break;
			case WeaponCategory.Charger:
				targetSetter = setChargers;
				break;
			case WeaponCategory.Blaster:
				targetSetter = setBlasters;
				break;
			case WeaponCategory.Roller:
				targetSetter = setRollers;
				break;
			case WeaponCategory.Brush:
				targetSetter = setBrushes;
				break;
			case WeaponCategory.Slosher:
				targetSetter = setSloshers;
				break;
			case WeaponCategory.Spinner:
				targetSetter = setSpinners;
				break;
			case WeaponCategory.Shelter:
				targetSetter = setShelters;
				break;
		}

		manager.setCheckedState(name, event.target.checked);
		targetSetter(prev => ({
			...prev,
			[name]: event.target.checked
		}));
	}

	const onClickSetAllChecked = (category: WeaponCategory) => (event: React.ChangeEvent<HTMLInputElement>) => {
		let targetobj: WeaponCheckedState = {};
		let targetSetter: Function = () => { };
		let targetSetAllChecked: Function = () => { };
		switch (category) {
			case WeaponCategory.Shooter:
				Object.assign(targetobj, shooters);
				targetSetter = setShooters;
				targetSetAllChecked = setAllShootersChecked;
				break;
			case WeaponCategory.Maneuver:
				Object.assign(targetobj, maneuvers);
				targetSetter = setManeuvers;
				targetSetAllChecked = setAllManeuversChecked;
				break;
			case WeaponCategory.Charger:
				Object.assign(targetobj, chargers);
				targetSetter = setChargers;
				targetSetAllChecked = setAllChargersChecked;
				break;
			case WeaponCategory.Blaster:
				Object.assign(targetobj, blasters);
				targetSetter = setBlasters;
				targetSetAllChecked = setAllBlastersChecked;
				break;
			case WeaponCategory.Roller:
				Object.assign(targetobj, rollers);
				targetSetter = setRollers;
				targetSetAllChecked = setAllRollersChecked;
				break;
			case WeaponCategory.Brush:
				Object.assign(targetobj, brushes);
				targetSetter = setBrushes;
				targetSetAllChecked = setAllBrushesChecked;
				break;
			case WeaponCategory.Slosher:
				Object.assign(targetobj, sloshers);
				targetSetter = setSloshers;
				targetSetAllChecked = setAllSloshersChecked;
				break;
			case WeaponCategory.Spinner:
				Object.assign(targetobj, spinners);
				targetSetter = setSpinners;
				targetSetAllChecked = setAllSpinnersChecked;
				break;
			case WeaponCategory.Shelter:
				Object.assign(targetobj, shelters);
				targetSetter = setShelters;
				targetSetAllChecked = setAllSheltersChecked;
				break;
		}

		for (let key in targetobj) {
			targetobj[key] = event.target.checked;
		}

		manager.setAllCheckedState(event.target.checked, category);
		targetSetter(targetobj);
		targetSetAllChecked(event.target.checked);
	}

	const onFabClick = async () => {
		const message = await sendMainInSelectableAll();
		setDialogMessage(message);
		if (message === "success") { setDialogIcon("success"); }
		else { setDialogIcon("error") }
		setDialogOpen(true);
	};

	const onDialogClose = () => {
		setDialogOpen(false);
	}

	return {
		shootersState: shooters,
		onChangeshooter: onChangeWeaponState(WeaponCategory.Shooter),
		allShootersChecked: allShootersChecked,
		onClickSetAllShootersChecked: onClickSetAllChecked(WeaponCategory.Shooter),
		maneuversState: maneuvers,
		onChangemaneuver: onChangeWeaponState(WeaponCategory.Maneuver),
		allManeuversChecked: allManeuversChecked,
		onClickSetAllManeuversChecked: onClickSetAllChecked(WeaponCategory.Maneuver),
		chargersState: chargers,
		onChangecharger: onChangeWeaponState(WeaponCategory.Charger),
		allChargersChecked: allChargersChecked,
		onClickSetAllChargersChecked: onClickSetAllChecked(WeaponCategory.Charger),
		blastersState: blasters,
		onChangeblaster: onChangeWeaponState(WeaponCategory.Blaster),
		allBlastersChecked: allBlastersChecked,
		onClickSetAllBlastersChecked: onClickSetAllChecked(WeaponCategory.Blaster),
		rollersState: rollers,
		onChangeroller: onChangeWeaponState(WeaponCategory.Roller),
		allRollersChecked: allRollersChecked,
		onClickSetAllRollersChecked: onClickSetAllChecked(WeaponCategory.Roller),
		brushesState: brushes,
		onChangebrush: onChangeWeaponState(WeaponCategory.Brush),
		allBrushesChecked: allBrushesChecked,
		onClickSetAllBrushesChecked: onClickSetAllChecked(WeaponCategory.Brush),
		sloshersState: sloshers,
		onChangeslosher: onChangeWeaponState(WeaponCategory.Slosher),
		allSloshersChecked: allSloshersChecked,
		onClickSetAllSloshersChecked: onClickSetAllChecked(WeaponCategory.Slosher),
		spinnersState: spinners,
		onChangespinner: onChangeWeaponState(WeaponCategory.Spinner),
		allSpinnersChecked: allSpinnersChecked,
		onClickSetAllSpinnersChecked: onClickSetAllChecked(WeaponCategory.Spinner),
		sheltersState: shelters,
		onChangeshelter: onChangeWeaponState(WeaponCategory.Shelter),
		allSheltersChecked: allSheltersChecked,
		onClickSetAllSheltersChecked: onClickSetAllChecked(WeaponCategory.Shelter),
		onFabClick: onFabClick,
		dialogOpen: dialogOpen,
		dialogMessage: dialogMessage,
		dialogIcon: dialogIcon,
		onDialogClose: onDialogClose,
	};
}

interface State {
	shootersState: WeaponCheckedState,
	onChangeshooter: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allShootersChecked: boolean,
	onClickSetAllShootersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	maneuversState: WeaponCheckedState,
	onChangemaneuver: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allManeuversChecked: boolean,
	onClickSetAllManeuversChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	chargersState: WeaponCheckedState,
	onChangecharger: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allChargersChecked: boolean,
	onClickSetAllChargersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	blastersState: WeaponCheckedState,
	onChangeblaster: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allBlastersChecked: boolean,
	onClickSetAllBlastersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	rollersState: WeaponCheckedState,
	onChangeroller: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allRollersChecked: boolean,
	onClickSetAllRollersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	brushesState: WeaponCheckedState,
	onChangebrush: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allBrushesChecked: boolean,
	onClickSetAllBrushesChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	sloshersState: WeaponCheckedState,
	onChangeslosher: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allSloshersChecked: boolean,
	onClickSetAllSloshersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	spinnersState: WeaponCheckedState,
	onChangespinner: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allSpinnersChecked: boolean,
	onClickSetAllSpinnersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	sheltersState: WeaponCheckedState,
	onChangeshelter: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	allSheltersChecked: boolean,
	onClickSetAllSheltersChecked: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onFabClick: () => void,
	dialogOpen: boolean,
	dialogMessage: string,
	dialogIcon: "success" | "warning" | "error" | "info",
	onDialogClose: () => void,
}

function isAnyChecked(obj: WeaponCheckedState): boolean {
	let res = false;
	for (let key in obj) {
		res = res || obj[key];
		if (res) break;
	}

	return res;
}