# hello-splatoon-bot

https://stin-dev.github.io/hello-splatoon-bot/

スプラトゥーンのブキをランダムにDiscordのテキストチャンネルに表示するアプリケーションです。
メインブキだけでなく、サブやスペシャル、ギアパワーまでランダム選択することができます。

## 使用技術等

### ユーザーインターフェイス

React + TypeScriptを使用。

Github Pagesにデプロイする。

## アプリケーション仕様

### Webhook

このアプリケーションはDiscordのWebhookを利用しています。
WebhookIDとWebhookTokenをブラウザに登録することで使用可能になります。

登録方法はヘルプページを参照してください。

https://stin-dev.github.io/hello-splatoon-bot/help.html

### データ保存

Webhookの情報や「全ブキ選択」の設定情報はブラウザのLocalStorageに保存します。

### 画像データ

画像データは https://github.com/stin-dev/hosting のGithubPagesを参照しています。
