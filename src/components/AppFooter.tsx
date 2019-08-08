import React from "react";
import { Divider, Theme, Link } from "@material-ui/core";
import TwitterShareButton from "./TwitterShareButton";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        buttonDisplay: {
            margin: theme.spacing(2),
            display: "inline-block",
        },
        linkDisplay: {
            marginLeft:"auto",
        }
    }));

export default function AppFooter() {
    const classes = useStyles();

    return (
        <div>
            <Divider />
            <TwitterShareButton className={classes.buttonDisplay}/>
        </div>
    );
}