import { makeStyles, createStyles } from "@material-ui/core";

const cardStyles = makeStyles(
    createStyles({
        card: {
            maxWidth: 300,
            margin: 15,
        },
        buttonRight: {
            marginLeft: "auto",
        },
        pos: {
          marginBottom: 12,
        },
    }),
);

export default cardStyles;