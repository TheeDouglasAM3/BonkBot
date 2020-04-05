const { MessageAttachment } = require("discord.js");

function botBonk() {return new MessageAttachment('img/assets/bonkBot.gif')}

function originalBonk() {return new MessageAttachment('img/assets/bonk.gif')}
function dreamyBonk() {return new MessageAttachment('img/assets/bonkDreamy.gif')}
function ripplesBonk() {return new MessageAttachment('img/assets/bonkRipples.gif')}
function rainbowBonk() {return new MessageAttachment('img/assets/bonkRainbow.gif')}
function glitchBonk() {return new MessageAttachment('img/assets/bonkGlitch.gif')}
function onFireBonk() {return new MessageAttachment('img/assets/bonkOnFire.gif')}
function partyBonk() {return new MessageAttachment('img/assets/bonkParty.gif')}

module.exports["bot"] = botBonk;
module.exports["original"] = originalBonk;
module.exports["dreamy"] = dreamyBonk;
module.exports["ripples"] = ripplesBonk;
module.exports["rainbow"] = rainbowBonk;
module.exports["glitch"] = glitchBonk;
module.exports["onFire"] = onFireBonk;
module.exports["party"] = partyBonk;