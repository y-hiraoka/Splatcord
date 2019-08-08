import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { sendSubWeapons } from '../logic/SplatoonSupportOnDiscord';
import cardStyles from "./CardStyles";
import OpenSnackbarButton from '../components/OpenSnackbarButton';
import { SnackbarProps } from "../components/CustomizedSnackbar";

export default function SimpleCard() {
  const classes = cardStyles();

  const [state, setState] = React.useState<{
    variant: SnackbarProps["variant"],
    message: string,
  }>({
    variant: "success",
    message: "",
  });

  const handleClick = async () => {
    await sendSubWeapons().then(messages => {
      if (messages === "success") {
        setState({ variant: "success", message: messages });
      } else {
        setState({ variant: "error", message: messages });
      }
    });
  }

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
        <OpenSnackbarButton className={classes.buttonRight}
             variant={state.variant}
             color="primary"
             successMessage={state.message}
             errorMessage={state.message}
             onClick={handleClick}>
          Send
        </OpenSnackbarButton>
      </CardActions>
    </Card>
  );
}