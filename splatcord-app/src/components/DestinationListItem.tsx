import React from 'react';
import { ListItem, Avatar, makeStyles, Theme, createStyles, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { lighten, darken } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClearIcon from '@material-ui/icons/Clear';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import SimpleExpansionPanel from './ExpansionPanel';
import { TokenListContext } from '../contexts/contextContainer';
import WebhookTokenManager from '../logic/WebhookTokenManager';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            backgroundColor: lighten(theme.palette.primary.main, 0.5),
            color: darken(theme.palette.primary.main, 0.5),
        },
    }));

const manager = WebhookTokenManager.getInstance();

export interface DestinationListItemProps {
    primary?: React.ReactNode,
    key?: string | number,
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void),
    savedTokenId:number,
}

export default function DestinationListItem(props: DestinationListItemProps) {
    const classes = useStyles();

    return (
        <ListItem button onClick={props.onClick} key={props.key}>
            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <FontAwesomeIcon icon={faDiscord} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.primary} />
            <ListItemSecondaryAction>
                <TokenListContext.Consumer>
                    {tokenListConsumer => {
                        function handleClick() {
                            if (window.confirm("保存されたトークンを削除しますか？")) {
                                manager.deleteTokenById(props.savedTokenId);
                                tokenListConsumer.setTokenList(manager.getTokenList());
                            }
                        }

                        return (
                            <IconButton edge="end" aria-label="delete" onClick={handleClick}>
                                <ClearIcon />
                            </IconButton>
                        )
                    }}
                </TokenListContext.Consumer>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export function DestinationAddListItem() {
    return (
        <ListItem key="add-list">
            <ListItemText primary={<SimpleExpansionPanel />} />
        </ListItem>
    );
}