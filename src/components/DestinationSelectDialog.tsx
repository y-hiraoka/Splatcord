import React from 'react';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DestinationListItem, { DestinationAddListItem } from './DestinationListItem';
import WebhookTokenManager, { SavedToken } from '../logic/WebhookTokenManager';
import { SelectedTokenContext, TokenListContext } from '../contexts/contextContainer';

const manager = WebhookTokenManager.getInstance();

export interface Props {
    open: boolean;
    selectedValue?: SavedToken;
}

export default function DestinationSelectDialog(props: Props) {
    const { selectedValue, open } = props;
    const [tokenList, setTokenList] = React.useState(manager.getTokenList());

    function wrapSetTokenList(value: SavedToken[]) {
        setTokenList(value);
    }

    return (
        <SelectedTokenContext.Consumer>
            {selectedTokenConsumer => {
                function handleClose() {
                    selectedTokenConsumer.setSelectedToken(selectedValue);
                }

                return (
                    <TokenListContext.Provider value={{
                        tokenList: tokenList,
                        setTokenList: wrapSetTokenList
                    }}>
                        <Dialog onClose={handleClose}
                            aria-labelledby="simple-dialog-title"
                            open={open}>
                            <DialogTitle id="simple-dialog-title">送信先を選択</DialogTitle>
                            <List>
                                {tokenList.map(token => (
                                    <DestinationListItem
                                        savedTokenId={token.id}
                                        key={token.id}
                                        onClick={() => selectedTokenConsumer.setSelectedToken(token)}
                                        primary={token.name}
                                    />
                                ))}
                                <DestinationAddListItem />
                            </List>
                        </Dialog>
                    </TokenListContext.Provider>
                )
            }}
        </SelectedTokenContext.Consumer>
    );
}
