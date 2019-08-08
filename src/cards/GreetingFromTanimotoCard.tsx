import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { sendGreetingfromTanimoto } from '../logic/SplatoonSupportOnDiscord';
import { CardMedia } from '@material-ui/core';
import imgTanimoto from "../image/tanimoto6.jpg";
import cardStyles from "./CardStyles";
import OpenSnackbarButton from '../components/OpenSnackbarButton';
import { SnackbarProps } from "../components/CustomizedSnackbar";

const useStyles = makeStyles(
  createStyles({
    media: {
      height: 180,
    },
  }),
);

export default function SimpleCard() {
  const cardClasses = cardStyles();
  const mediaClass = useStyles();
  const [state, setState] = React.useState<{
    variant: SnackbarProps["variant"],
    message: string,
  }>({
    variant: "success",
    message: "",
  });

  const handleClick = async () => {
    await sendGreetingfromTanimoto().then(messages => {
      if (messages === "success") {
        setState({ variant: "success", message: messages });
      } else {
        setState({ variant: "error", message: messages });
      }
    });
  }

  return (
    <Card className={cardClasses.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          谷本安美の自己紹介
        </Typography>
        <CardMedia
          className={mediaClass.media}
          image={imgTanimoto}
          title="ami tanimoto"
        />
        <Typography variant="body2" component="p" color="textSecondary">
          つばきファクトリー谷本安美さんが自己紹介をします。
        </Typography>
      </CardContent>
      <CardActions>
        <OpenSnackbarButton className={cardClasses.buttonRight}
          variant={state.variant}
          color="secondary"
          successMessage={state.message}
          errorMessage={state.message}
          onClick={handleClick}>
          Send
        </OpenSnackbarButton>
      </CardActions>
    </Card>
  );
}