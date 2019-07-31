import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { sendMainWeaponsInCategory } from '../logic/SplatoonSupportOnDiscord';
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import cardStyles from "./CardStyles";
import { WeaponCategory } from '../splatoonSupport/weapons/MainWeapon';
import OpenSnackbarButton from '../components/OpenSnackbarButton';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function SimpleCard() {
  const cardClasses = cardStyles();
  const classes = useStyles();

  const [values, setValues] = React.useState({ category: WeaponCategory.Shooter });

  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value,
    }));
  };

  function buttonOnClick() {
    if (values.category === -1) return;
    sendMainWeaponsInCategory(values.category);
  };

  return (
    <Card className={cardClasses.card}>
      <CardContent>
        <Typography variant="h6">
          メインブキランダム
        </Typography>
        <Typography className={cardClasses.pos} color="textSecondary">
          ブキカテゴリ指定
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          指定されたブキカテゴリに属するメインブキからランダムで4つ選択され、
          Discordのテキストチャンネルに送信します。
        </Typography>
      </CardContent>
      <CardActions>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="weapon-categories">カテゴリ</InputLabel>
            <Select
              value={values.category}
              onChange={handleChange}
              name="category"
              inputProps={{
                id: 'weapon-categories',
              }}
              className={classes.selectEmpty}
            >
              <MenuItem value={WeaponCategory.Shooter}>シューター</MenuItem>
              <MenuItem value={WeaponCategory.Maneuver}>マニューバー</MenuItem>
              <MenuItem value={WeaponCategory.Charger}>チャージャー</MenuItem>
              <MenuItem value={WeaponCategory.Blaster}>ブラスター</MenuItem>
              <MenuItem value={WeaponCategory.Roller}>ローラー</MenuItem>
              <MenuItem value={WeaponCategory.Brush}>フデ</MenuItem>
              <MenuItem value={WeaponCategory.Slosher}>スロッシャー</MenuItem>
              <MenuItem value={WeaponCategory.Spinner}>スピナー</MenuItem>
              <MenuItem value={WeaponCategory.Shelter}>シェルター</MenuItem>
            </Select>
          </FormControl>
        <OpenSnackbarButton className={cardClasses.buttonRight}
          variant="success"
          color="primary"
          successMessage="送信完了！"
          errorMessage="Error! stin_stinに知らせてください"
          onClick={buttonOnClick}>
          Send
        </OpenSnackbarButton>
      </CardActions>
    </Card>
  );
}

