const { MessageAttachment } = require("discord.js");

module.exports = { 

    async bonk(cmd, message, args){
        
        if(cmd === `bonk`){

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
    }
}