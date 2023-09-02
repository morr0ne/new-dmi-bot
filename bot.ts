import { Bot, Keyboard } from "grammy";

const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");

export const bot = new Bot(token);

// deno-fmt-ignore
bot.api.setMyCommands([
    {command: "start", description: "messaggio di benvenuto"},
    {command: "help ", description: "help"},
    {command: "gruppi", description: "link alla lista dei gruppi telegram delle materie"},
    {command: "esami", description: "cerca informazioni sugli esami"},
    {command: "lezioni", description: "cerca informazioni sulle lezioni"},
    {command: "prof", description: "cerca informazioni sui professori"},
    {command: "aulario", description: "cerca informazioni sull'aulario"},
    {command: "ufficioersu", description: "locazione e orari sede ufficio ersu"},
    {command: "ersu", description: "locazione e orari sede ersu"},
    {command: "sdidattica", description: "locazione e orari segreteria didattica"},
    {command: "studenti", description: "locazione e orari segreteria studenti"},
    {command: "cus", description: "locazione e orari del CUS"},
    {command: "cea", description: "CEA"},
    {command: "urp", description: "URP"},
    {command: "mensa", description: "orari e menù della mensa"},
    {command: "biblioteca", description: "orari della biblioteca"},
    {command: "drive", description: "accedi alla cartella Drive"},
    {command: "drive_contribute", description: "ottieni i permessi per caricare materiale sulla cartella Drive"},
    {command: "git", description: "accedi al materiale didattico su GitLab"},
    {command: "gitlab", description: "accedi al materiale didattico su GitLab"},
    {command: "rappresentanti", description: "lista rappresentanti"},
    {command: "rappresentanti_dmi", description: "lista rappresentanti dmi"},
    {command: "rappresentanti_matematica", description: "lista rappresentanti matematica"},
    {command: "rappresentanti_informatica", description: "lista rappresentanti informatica"},
    {command: "report", description: "segnala un problema"},
    {command: "contributors", description: "sviluppatori del bot"},
    {command: "chatid", description: "mostra la chat id di questa chat"},
    {command: "cloud", description: "risorse didattiche in cloud"},
    {command: "regolamentodidattico", description: "lista dei regolamenti didattici"},
    {command: "ricevimenti", description: "lista orari ricevimenti dei professori"},
    {command: "trasporto_urbano_unict", description: "link orari BRTU"},
    {command: "dmi_3d", description: "mappa in 3D del DMI"},
    {command: "mercatino", description: "bot per la vendita e l'acquisto di libri"},
    {command: "faq", description: "mostra le domande chieste più frequentemente"},
])

const keyboard = new Keyboard()
  .text("❔ Aiuto")
  .text("📫 Segnalazione Rappresentanti")
  .text("📚 Mercatino Libri")
  .row()
  .text("📆 Aulario")
  .text("☁ Cloud")
  .resized()
  .persistent();

bot.command(
  "start",
  (ctx) =>
    ctx.reply(
      "Benvenuto! Questo bot è stato realizzato dagli studenti del Corso di Laurea in Informatica al fine di suppotare gli studenti del DMI!\n" +
        "Per scoprire cosa puoi fare usa /help o premi il pulsante ❔ Aiuto",
      { reply_markup: keyboard },
    ),
);

bot.command("help", (ctx) => {
});
