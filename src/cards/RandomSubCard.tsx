import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sendSubWeapons } from '../logic/SplatoonSupportOnDiscord';
import cardStyles from "./CardStyles";

export default function SimpleCard() {
  const classes = cardStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          サブウェポンランダム
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          スプラトゥーン2の全サブウェポンからランダムで4つ選択され、
          Discordのテキストチャンネルに送信します。
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.buttonRight}
          variant="contained"
          color="primary"
          onClick={sendSubWeapons}>
          Send
        </Button>
      </CardActions>
    </Card>
  );
}