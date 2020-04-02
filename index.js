const { Client, MessageAttachment } = require("discord.js");
const { config } = require("dotenv");

//Previnir que o client tem a permissão de pingar @everyone
const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

client.on("ready", () => {
    console.log(`Olá, ${client.user.username} estou online!`);

    // Set the user presence
    client.user.setPresence({
        status: "online",
        game: {
            name: "Command: b!bonk <mention a user>",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
    const prefix = "b!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "bonk") {
        let attachment;
        const randomNumber = Math.round(Math.random() * 100);
        
        if(randomNumber <= 50){
            attachment = new MessageAttachment('img/assets/bonk.gif');
        }else if(randomNumber > 75 && randomNumber <= 85){
            attachment = new MessageAttachment('img/assets/bonkDreamy.gif');
        }else if(randomNumber > 85 && randomNumber <= 95){
            attachment = new MessageAttachment('img/assets/bonkRipples.gif');
        }else if(randomNumber > 95 && randomNumber <= 100){
            attachment = new MessageAttachment('img/assets/bonkRainbow.gif');
        }
        await message.channel.send(`${message.author} bonkou ${args[0]}`, attachment);
    }
});

client.login(process.env.TOKEN);