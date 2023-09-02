import { bot } from "./bot.ts";

if (await bot.api.deleteWebhook()) {
  bot.start();
} else {
  console.error("Failed to deleted webhook");
}
