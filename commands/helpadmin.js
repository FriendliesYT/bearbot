const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {return message.reply("You don't have permission.");}
  if(!args[0] || args[0 == "help"]) {return message.channel.send({embed: {color: 15158332, title: "Admin Help Menu", description: `!clear\n!shutdown\n!prefix\n!clearconsole`}});}
    }
module.exports.help = {
  name:"helpadmin"
}

//SAMPLE RICH EMBED
//message.channel.send({embed: {color: 15158332, title: "TITLE", description: `DESCRIPTION`}}).then(msg => msg.delete(4000));
