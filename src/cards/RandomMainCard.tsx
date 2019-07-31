import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { sendMainWeapons } from '../logic/SplatoonSupportOnDiscord';
import cardStyles from "./CardStyles";
import OpenSnackbarButton from '../components/OpenSnackbarButton';

export default function SimpleCard() {
  const classes = cardStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          メインブキランダム
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          スプラトゥーン2の全メインブキからランダムで4つ選択され、
          Discordのテキストチャンネルに送信します。
        </Typography>
      </CardContent>
      <CardActions>
        <OpenSnackbarButton className={classes.buttonRight}
          variant="success"
          color="primary"
          successMessage="送信完了！"
          errorMessage="Error! stin_stinに知らせてください"
          onClick={sendMainWeapons}>
          Send
        </OpenSnackbarButton>
      </CardActions>
    </Card>
  );
}