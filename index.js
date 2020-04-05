const { Client } = require("discord.js");
const { config } = require("dotenv");

const botconfig = require('./config.json');

const cmdBonk = require('./src/commands/bonk');

//Previnir que o client tem a permissão de pingar @everyone
const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

const prefix = botconfig.prefix;

client.on("ready", () => {
    console.log(`Olá, ${client.user.username} estou online!`);

    client.user.setActivity("b!bonk <mention a user>", { type: "WATCHING" })
  
})

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const ownIdBot = client.user.id;

    await cmdBonk.bonk(cmd, message, args, ownIdBot);
});

client.login(process.env.TOKEN);