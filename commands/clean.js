const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;
      module.exports.run = async (bot, message, args) => {
let cleanedEmbed = new Discord.RichEmbed()
.setColor(green)
.setTitle("**BEAR BOT**")
.setDescription(`Cleaned ${args[0]} messages.`);
let nopermissionEmbed = new Discord.RichEmbed()
.setColor(green)
.setTitle("**BEAR BOT**")
.setDescription(`${message.author.username}, you don't have permission to clean messages.`);
let cleancommandsyntaxEmbed = new Discord.RichEmbed()
.setColor(green)
.setTitle("**BEAR BOT**")
.setDescription(`Usage: !clean <1 to 100>`);
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermissionEmbed).then(msg => msg.delete(3000));;
                if(!args[0]) return message.channel.send(cleancommandsyntaxEmbed).then(msg => msg.delete(4000));
                message.channel.bulkDelete(args[0]).then(() => {
                message.channel.send(cleanedEmbed).then(msg => msg.delete(3000));});}
      module.exports.help = {name:"clean"}
