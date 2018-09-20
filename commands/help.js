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

        let helpEmbed = new Discord.RichEmbed()
        .setColor(lightblue)
        .setTitle("**BEAR BOT**")
        .setDescription('**COMMANDS:**\n◇ !coins\n◇ !pay\n◇ !8ball\n◇ !goodnight\n◇ !online\n◇ !youtube');

        message.channel.send(helpEmbed).then(msg => (msg.delete(10000)));
      }

      module.exports.help = {
        name:"help"
      }
