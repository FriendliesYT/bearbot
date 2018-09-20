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
            let adminhelpEmbed = new Discord.RichEmbed()
            .setColor(red)
            .setTitle("**BEAR BOT**")
            .setDescription('**ADMIN COMMANDS:**\n◇ !clear\n◇ !shutdown\n◇ !prefix\n◇ !clearconsole');
            if(!message.member.hasPermission("ADMINISTRATOR")) {return message.reply("You don't have permission.");}
            if(!args[0] || args[0 == "help"]) {return message.channel.send(adminhelpEmbed).then(msg => (msg.delete(10000)));}
              }
module.exports.help = {
  name:"helpadmin"
}

//SAMPLE RICH EMBED
//message.channel.send({embed: {color: 15158332, title: "TITLE", description: `DESCRIPTION`}}).then(msg => msg.delete(4000));
