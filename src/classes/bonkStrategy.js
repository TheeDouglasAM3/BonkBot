const { MessageAttachment } = require("discord.js");

function originalBonk(){

    return new MessageAttachment('img/assets/bonk.gif')
}
function dreamyBonk(){

    return new MessageAttachment('img/assets/bonkDreamy.gif')
}
function ripplesBonk(){

    return new MessageAttachment('img/assets/bonkRipples.gif')
}
function rainbowBonk(){

    return new MessageAttachment('img/assets/bonkRainbow.gif')
}

module.exports["original"] = originalBonk;
module.exports["dreamy"] = dreamyBonk;
module.exports["ripples"] = ripplesBonk;
module.exports["rainbow"] = rainbowBonk;