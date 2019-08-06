import { createContext } from "react";
import WebhookTokenManager, { SavedToken } from "../logic/WebhookTokenManager";

const manager = WebhookTokenManager.getInstance();

export const SelectedTokenContext = createContext({
    selectedToken: manager.getSelectedToken(),
    setSelectedToken: (value?: SavedToken) => { },
});

export const TokenListContext = createContext({
    tokenList: manager.getTokenList(),
    setTokenList: (value:SavedToken[]) => { },
});