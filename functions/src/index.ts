import "reflect-metadata";
import "./container";
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import https from "./https";

admin.initializeApp();

export const auth = functions.https.onRequest(https);

export const localtest = functions.https.onRequest((req, res) => {
  const config = functions.config();

  console.log(JSON.stringify(config));

  res.send(config);
})