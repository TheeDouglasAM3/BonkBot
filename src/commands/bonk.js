const bonkStrategy = require('../classes/bonkStrategy');

module.exports = { 

    async bonk(cmd, message, args, ownIdBot){
        
        if(cmd === `bonk`){

            let attachment;
            const idMembroMencionado = this._algumMembroFoiMencionado(message)
                ? message.mentions.users.first().id
                : null
            
            if (idMembroMencionado == ownIdBot){

                attachment = bonkStrategy["bot"]();

                try {
                    await message.channel.send(`Você não pode me bonkar. O BonkBot bonkou você, ${message.author}`, attachment);
                } catch (error) {
                    console.log(error);
                }
                
            }else{
                
                const effectsBonk = ["original", "dreamy", "ripples", "rainbow", "glitch", 
                "onFire", "party"];

                const randomEffect = effectsBonk[Math.floor(Math.random() * effectsBonk.length)];

                attachment = bonkStrategy[randomEffect]();

                try {
                    if(this._membroMencionadoNaoEhOProprioUsuario(message, idMembroMencionado))
                        await message.channel.send(`${message.author} bonkou ${args[0]}`, attachment);
                    else
                        await message.channel.send(`Você se bonkou, ${message.author}`, attachment);
                } catch(error) {
                    console.log(error);
                }

            }    
        }
    },

    _algumMembroFoiMencionado(message){
        return message.mentions.users.first() != null;
    },

    _membroMencionadoNaoEhOProprioUsuario(message, idMembroMencionado){
        return idMembroMencionado != null && idMembroMencionado !== message.author.id;
    }
}