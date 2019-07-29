import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sendMainWeapons, sendMainWeaponsWithOneCharger } from '../logic/SplatoonSupportOnDiscord';
import cardStyles from "./CardStyles";

export default function SimpleCard() {
  const classes = cardStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          メインブキランダム
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          チャージャー含む
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          スプラトゥーン2の全メインブキからランダムで4つ選択され、
          Discordのテキストチャンネルに送信します。
          4つのうち必ず1つチャージャー系になります。
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.buttonRight}
          variant="contained"
          color="primary"
          onClick={sendMainWeaponsWithOneCharger}>
          Send
        </Button>
      </CardActions>
    </Card>
  );
}