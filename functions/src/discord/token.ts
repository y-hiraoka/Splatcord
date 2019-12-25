import axios from "axios";
import { ApiEndpoint } from "./constant";
import { URLSearchParams } from "url";
import { AccessTokenResponse } from ".";
import { errorHandler } from "./errors";
import { PartialGuildImpl } from "./model";

/**
 * The authorization code grant is what most developers will recognize as "standard OAuth2" 
 * and involves retrieving an access code and exchanging it for a user's access token. 
 * It allows the authorization server to act as an intermediary between the client and the resource owner,
 *  so the resource owner's credentials are never shared directly with the client.
 */
export class TokenClient {
  /**
   * TokenClient constructor.
   * @param clientId your application's client id
   * @param clientSecret your application's client secret
   * @param redirectUri your `redirect_uri`
   */
  constructor(
    public clientId?: string,
    public clientSecret?: string,
    public redirectUri?: string,
  ) { }

  private post = async <T>(url: string, params: any): Promise<T> => {
    try {
      const tokenResponse = await axios.post<T>(url, params,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

      return tokenResponse.data;
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
      else throw error;
    }
  }

  /**
   * Exchange `code` for usre's access token.
   * @param code `code` will be exchanged for the user's access token by making a `POST` request to the token URL.
   */
  exchangeToken = async (code: string): Promise<AccessTokenResponse> => {
    const params = new URLSearchParams();
    params.append("client_id", this.clientId ?? "");
    params.append("client_secret", this.clientSecret ?? "");
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", this.redirectUri ?? "");

    const response = await this.post<AccessTokenResponse>(`${ApiEndpoint}/oauth2/token`, params);

    if (response.guild) response.guild = new PartialGuildImpl(response.guild);

    return response;
  }

  /**
   * Refresh user's token.
   * @param refreshToken user's refresh token
   */
  refreshToken = async (refreshToken: string): Promise<AccessTokenResponse> => {
    const params = new URLSearchParams();
    params.append("client_id", this.clientId ?? "");
    params.append("client_secret", this.clientSecret ?? "");
    params.append("grant_type", "refresh_token");
    params.append("code", refreshToken);
    params.append("redirect_uri", this.redirectUri ?? "");

    const response = await this.post<AccessTokenResponse>(`${ApiEndpoint}/oauth2/token`, params);

    if (response.guild) response.guild = new PartialGuildImpl(response.guild);

    return response;
  }
}
