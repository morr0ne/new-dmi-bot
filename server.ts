import { bot } from "./bot.ts";
import { Application, Router } from "oak";
import { webhookCallback } from "grammy";

const DOMAIN = "https://unict.morrone.dev";
const API_ENDPOINT = "/telegram-bot-api-endpoint";

bot.api.setWebhook(DOMAIN + API_ENDPOINT);

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Questo non è il bot che stai cercando";
  })
  .use(API_ENDPOINT, webhookCallback(bot, "oak"));

const app = new Application();

app.use(router.routes());
app.listen({ port: 443 });
