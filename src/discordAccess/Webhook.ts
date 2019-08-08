import WebhookEntity from "./WebhookEntity";

const webhookUrl = "https://discordapp.com/api/webhooks"

/**
 * https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 * webhook.idとwebhook.tokenを指定してWebhookを実行する
 * @param webhookId 
 * @param webhookToken 
 * @param entity
 */
export default async function executeWebhook(
    webhookId: string,
    webhookToken: string,
    entity: WebhookEntity): Promise<string> {
    const body = JSON.stringify(entity);

    return await fetch(`${webhookUrl}/${webhookId}/${webhookToken}`, {
        method: "POST",
        body: body,
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        if (response.ok) { return "success"; }
        else { return "WebhookIdまたはWebhookTokenが間違っています"}
    }).then(text => {
        console.log(text);
        return text;
    });
}
