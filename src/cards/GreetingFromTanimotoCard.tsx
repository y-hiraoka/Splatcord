import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sendGreetingfromTanimoto } from '../logic/SplatoonSupportOnDiscord';
import { CardMedia } from '@material-ui/core';
import imgTanimoto from "../image/tanimoto6.jpg";
import cardStyles from "./CardStyles";

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
        <Button  className={cardClasses.buttonRight}
         variant="contained"
          color="secondary"
          onClick={sendGreetingfromTanimoto}>
          Send
        </Button>
      </CardActions>
    </Card>
  );
}