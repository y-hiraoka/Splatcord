import * as functions from 'firebase-functions';
import { injectable, inject } from "tsyringe";
import { TokenClient, UserClient } from "../discord";

@injectable()
export class DiscordClientService {
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

  get TokenClient() { return this.tokenClient }
  get UserClient() { return this.userClient }
}