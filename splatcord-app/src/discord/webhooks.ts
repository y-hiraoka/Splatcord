import { WebhookExecutionObject, Webhook } from ".";
import axios from "axios";
import { errorHandler } from "./Errors";
import { ApiEndpoint } from "./constant";

/**
 * Webhooks are a low-effort way to post messages to channels in Discord.
 * They do not require a bot user or authentication to use 
 * https://discordapp.com/developers/docs/resources/webhook
 */
export class WebhookClient {
  constructor(
    private webhookId?: string,
    private webhookToken?: string,
  ) { }

  get WebhookId(): string | undefined { return this.webhookId; }
  set WebhookId(value: string | undefined) { this.WebhookId = value; }

  get WebhookToken(): string | undefined { return this.webhookToken; }
  set WebhookToken(value: string | undefined) { this.webhookToken = value; }

  private get WebhookUrl() { return `${ApiEndpoint}/webhooks/${this.webhookId}/${this.webhookToken}`}

  /**
   * Returns the new webhook object for the given id.
   * This call does not require authentication and returns no user in the webhook object.
   * https://discordapp.com/developers/docs/resources/webhook#get-webhook-with-token
   */
  getWebhook = async (): Promise<Webhook> => {
    try {
      const response = await axios.get<Webhook>(this.WebhookUrl);
      return response.data;
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
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
        this.WebhookUrl,
        data,
      );

      return response.data;
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
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
      await axios.delete(
        this.WebhookUrl,
      );
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
      else throw error;
    }
  }

  /**
   * https://discordapp.com/developers/docs/resources/webhook#execute-webhook
   */
  executeWebhook = async (data: WebhookExecutionObject): Promise<void> => {
    try {
      await axios.post(
        this.WebhookUrl,
        data, { headers: { "Content-Type": "application/json" } });
    } catch (error) {
      if (error.isAxiosError) throw errorHandler(error);
      else throw error;
    }
  }
}
