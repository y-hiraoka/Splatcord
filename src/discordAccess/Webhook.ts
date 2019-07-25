import WebhookEntity from "./WebhookEntity";

const webhookUrl = "https://discordapp.com/api/webhooks"

/**
 * https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 * webhook.idとwebhook.tokenを指定してWebhookを実行する
 * @param webhookId 
 * @param webhookToken 
 * @param entity
 */
export default function executeWebhook(
    webhookId: string,
    webhookToken: string,
    entity: WebhookEntity): void {
    const body = JSON.stringify(entity);

    fetch(`${webhookUrl}/${webhookId}/${webhookToken}`, {
        method: "POST",
        body: body,
        headers: { "Content-Type": "application/json" }
    }).then(response => response.text())
        .then(text => {
            console.log(text);
        });
}
