import axios from "axios";
import { User, PartialGuild } from ".";
import { ApiEndpoint } from "./constant";
import { errorHandler } from "./Errors";

export class UserClient {
  private headers: any = {};

  /**
   * UserClient constructor.
   * @param accessToken An access token of the user signed in.
   */
  constructor(
    private accessToken?: string,
  ) {
    this.headers.Authorization = `Bearer ${this.accessToken}`;
  }

  /** An access token of the user signed in. */
  get AccessToken() { return this.accessToken; }
  set AccessToken(value: string | undefined) {
    this.accessToken = value;
    this.headers.Authorization = `Bearer ${this.accessToken}`;
  }

  private get = async <T>(url: string): Promise<T> => {
    try {
      const result = await axios.get<T>(url, {
        headers: this.headers,
      });
  
      return result.data;
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
      else throw error;
    }
  }

  /** Returns the user object of the requester's account. */
  getCurrentUser = async (): Promise<User> => {
    return await this.get<User>(`${ApiEndpoint}/users/@me`);
  }

  /** Returns a list of partial guild objects the current user is a member of. */
  getCurrentUserGuilds = async (): Promise<PartialGuild[]> => {
    return await this.get<PartialGuild[]>(`${ApiEndpoint}/users/@me/guilds`);
  }
}