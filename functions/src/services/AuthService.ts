import * as admin from 'firebase-admin';
import { injectable } from "tsyringe";
import { AuthUserModel } from "../models";
import { DiscordClientService } from './DiscordClientService';

@injectable()
export class AuthService {
  constructor(private discord: DiscordClientService) { }

  signInWithDiscord = async (code: string): Promise<AuthUserModel> => {

    const token = await this.discord.TokenClient.exchangeToken(code);

    this.discord.UserClient.AccessToken = token.access_token;
    const user = await this.discord.UserClient.getCurrentUser();

    const customToken = await admin.auth().createCustomToken(user.id);

    const photoURLpng = user.userAvatarUrl("png");
    const authUserModel = new AuthUserModel();
    authUserModel.customToken = customToken;
    authUserModel.discordAccessToken = token.access_token;
    authUserModel.discordRefreshToken = token.refresh_token;
    authUserModel.discordUserId = user.id;
    authUserModel.displayName = user.username;
    authUserModel.photoURL = photoURLpng ?? user.defaultUserAvatarUrl;
    authUserModel.discriminator = user.discriminator;

    return authUserModel;
  }
}
