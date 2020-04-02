const bonkStrategy = require('../classes/bonkStrategy');

module.exports = { 

    async bonk(cmd, message, args){
        
        if(cmd === `bonk`){

            let attachment;
            const effectsBonk = ["original", "dreamy", "ripples", "rainbow"];
            const randomEffect = effectsBonk[Math.floor(Math.random() * effectsBonk.length)];

            attachment = bonkStrategy[randomEffect]();

            await message.channel.send(`${message.author} bonkou ${args[0]}`, attachment);
        }
    }
}