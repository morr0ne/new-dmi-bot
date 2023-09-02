import { bot } from "./bot.ts";
import { Application } from "oak";
import { webhookCallback } from "grammy";

const app = new Application();

app.use(webhookCallback(bot, "oak"));

app.listen();
