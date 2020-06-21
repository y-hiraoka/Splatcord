import React from 'react';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import SettingsIcon from "@material-ui/icons/Settings";
import DestinationSelectDialog from './DestinationSelectDialog';
import WebhookTokenManager, { SavedToken } from '../logic/WebhookTokenManager';
import { SelectedTokenContext } from '../contexts/contextContainer';

const manager = WebhookTokenManager.getInstance();

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedToken, setSelectedToken] = React.useState(manager.getSelectedToken());

    function handleClickOpen() {
        setOpen(true);
    }

    const handleClose = (value?: SavedToken) => {
        setOpen(false);
        setSelectedToken(value);
        if (value) manager.setSelectedId(value.id);
    };

    return (
        <SelectedTokenContext.Provider value={{ selectedToken: selectedToken, setSelectedToken: handleClose }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClickOpen}>
                <SettingsIcon />
            </IconButton>
            <Typography variant="subtitle1">SEND TO: {selectedToken ? selectedToken.name : ""}</Typography>
            <DestinationSelectDialog selectedValue={selectedToken} open={open} />
        </SelectedTokenContext.Provider>
    );
}