import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { injectable, inject } from "tsyringe";
import { TokenClient, UserClient } from "../discord";
import { AuthUserModel } from "../models";

@injectable()
export class AuthService {
  constructor(
    @inject("TokenClient") private tokenClient: TokenClient,
    @inject("UserClient") private userClient: UserClient,
  ) {
    const clientId: string = functions.config().discord.client_id;
    const clientSecret: string = functions.config().discord.client_secret;
    const redirectUri: string = functions.config().discord.redirect_uri;

    tokenClient.clientId = clientId;
    tokenClient.clientSecret = clientSecret;
    tokenClient.redirectUri = redirectUri;
  }

  signInWithDiscord = async (code: string): Promise<AuthUserModel> => {

    const token = await this.tokenClient.exchangeToken(code);
    console.log(token);

    this.userClient.AccessToken = token.access_token;
    const user = await this.userClient.getCurrentUser();
    console.log(user);

    const customToken = await admin.auth().createCustomToken(user.id);

    const photoURLpng = user.userAvatarUrl("png");
    const authUserModel = new AuthUserModel();
    authUserModel.customToken = customToken;
    authUserModel.accessToken = token.access_token;
    authUserModel.refreshToken = token.refresh_token;
    authUserModel.discordUserId = user.id;
    authUserModel.displayName = user.username;
    authUserModel.photoURL = photoURLpng ? photoURLpng : user.defaultUserAvatarUrl;
    authUserModel.discriminator = user.discriminator;

    return authUserModel;
  }
}
