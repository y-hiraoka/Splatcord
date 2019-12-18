import { WebhookExecutionObject, Webhook, HttpResponseCodes } from ".";
import axios, { AxiosError } from "axios";
import {
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  TooManyRequestsError,
} from "./Error";

/**
 * Webhooks are a low-effort way to post messages to channels in Discord.
 * They do not require a bot user or authentication to use 
 * https://discordapp.com/developers/docs/resources/webhook
 */
export class WebhookClient {
  private webhookUrl = "https://discordapp.com/api/webhooks";

  constructor(
    private webhookId?: string,
    private webhookToken?: string,
  ) { }

  get WebhookId(): string | undefined { return this.webhookId; }
  set WebhookId(value: string | undefined) { this.WebhookId = value; }

  get WebhookToken(): string | undefined { return this.webhookToken; }
  set WebhookToken(value: string | undefined) { this.webhookToken = value; }

  /**
   * Returns the new webhook object for the given id.
   * This call does not require authentication and returns no user in the webhook object.
   * https://discordapp.com/developers/docs/resources/webhook#get-webhook-with-token
   */
  getWebhook = async (): Promise<Webhook> => {
    try {
      const response = await axios.get<Webhook>(`${this.webhookUrl}/${this.webhookId}/${this.webhookToken}`);
      return response.data;
    } catch (error) {
      if (error.isAxiosError) throw this.errorHandler(error);
      else throw error;
    }
  }

  /**
   * Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook object on success.
   * This call does not require authentication, does not accept a channel_id parameter in the body,
   * and does not return a user in the webhook object.
   * https://discordapp.com/developers/docs/resources/webhook#modify-webhook-with-token
   */
  modifyWebhook = async (data: { name?: string, avatar?: string }): Promise<Webhook> => {
    try {
      const response = await axios.patch<Webhook>(
        `${this.webhookUrl}/${this.webhookId}/${this.webhookToken}`,
        data,
      );

      return response.data;
    } catch (error) {
      if (error.isAxiosError) throw this.errorHandler(error);
      else throw error;
    }
  }

  /**
   * Delete a webhook permanently. User must be owner. Returns a 204 NO CONTENT response on success.
   * This call does not require authentication.
   * https://discordapp.com/developers/docs/resources/webhook#delete-webhook-with-token
   */
  deleteWebhook = async () => {
    try {
      const response = await axios.delete(
        `${this.webhookUrl}/${this.webhookId}/${this.webhookToken}`,
      );

      console.log(response);
    } catch (error) {
      if (error.isAxiosError) throw this.errorHandler(error);
      else throw error;
    }
  }

  /**
   * https://discordapp.com/developers/docs/resources/webhook#execute-webhook
   */
  executeWebhook = async (data: WebhookExecutionObject): Promise<void> => {
    try {
      const response = await axios.post(
        `${this.webhookUrl}/${this.webhookId}/${this.webhookToken}`,
        data, { headers: { "Content-Type": "application/json" } });

      console.log(response);
    } catch (error) {
      if (error.isAxiosError) throw this.errorHandler(error);
      else throw error;
    }
  }

  private errorHandler = (error: AxiosError): Error => {
    if (!error.response) throw error;

    switch (error.response.status) {
      case HttpResponseCodes.BAD_REQUEST:
        throw new BadRequestError();

      case HttpResponseCodes.UNAUTHORIZED:
        throw new UnauthorizedError();

      case HttpResponseCodes.FORBIDDEN:
        throw new ForbiddenError();

      case HttpResponseCodes.NOT_FOUND:
        throw new NotFoundError();

      case HttpResponseCodes.TOO_MANY_REQUESTS:
        throw new TooManyRequestsError();

      default:
        throw error;
    }
  }
}
