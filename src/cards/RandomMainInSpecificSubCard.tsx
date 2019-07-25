import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sendMainInSpecificSub } from '../SplatoonSupportOnDiscord';
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import cardStyles from "./CardStyles";


const selectStyles = makeStyles((theme: Theme) =>
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
  const selectClasses = selectStyles();

  const [values, setValues] = React.useState({ subWeaponName: "スプラッシュボム" });

  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value,
    }));
  };

  function buttonOnClick() {
    sendMainInSpecificSub(values.subWeaponName);
  };

  return (
    <Card className={cardClasses.card}>
      <CardContent>
        <Typography variant="h6">
          メインブキランダム
        </Typography>
        <Typography className={cardClasses.pos} color="textSecondary">
          サブウェポン指定
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          指定されたサブウェポンを搭載するメインブキからランダムで4つ選択され、
          Discordのテキストチャンネルに送信します。
        </Typography>
      </CardContent>
      <CardActions>
        <form className={selectClasses.root} autoComplete="off">
          <FormControl required className={selectClasses.formControl}>
            <InputLabel htmlFor="sub-weapons">サブウェポン名</InputLabel>
            <Select
              value={values.subWeaponName}
              onChange={handleChange}
              name="subWeaponName"
              inputProps={{
                id: 'sub-weapons',
              }}
              className={selectClasses.selectEmpty}
            >
              <MenuItem value="スプラッシュボム">スプラッシュボム</MenuItem>
              <MenuItem value="キューバンボム">キューバンボム</MenuItem>
              <MenuItem value="クイックボム">クイックボム</MenuItem>
              <MenuItem value="スプリンクラー">スプリンクラー</MenuItem>
              <MenuItem value="ジャンプビーコン">ジャンプビーコン</MenuItem>
              <MenuItem value="スプラッシュシールド">スプラッシュシールド</MenuItem>
              <MenuItem value="ポイントセンサー">ポイントセンサー</MenuItem>
              <MenuItem value="トラップ">トラップ</MenuItem>
              <MenuItem value="カーリングボム">カーリングボム</MenuItem>
              <MenuItem value="ロボットボム">ロボットボム</MenuItem>
              <MenuItem value="ポイズンミスト">ポイズンミスト</MenuItem>
              <MenuItem value="タンサンボム">タンサンボム</MenuItem>
              <MenuItem value="トーピード">トーピード</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Button className={cardClasses.buttonRight}
          variant="contained"
          color="primary"
          onClick={buttonOnClick}>
          Send
        </Button>
      </CardActions>
    </Card>
  );
}
