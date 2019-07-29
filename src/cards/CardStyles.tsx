import { makeStyles, createStyles, Theme } from "@material-ui/core";

const cardStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: theme.spacing(2),
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