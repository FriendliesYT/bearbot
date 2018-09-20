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
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission.");
                if(!args[0]) return message.channel.send({embed: {color: 15158332, title: "Clear Command Syntax:", description: `Usage: !clear <1 to 100>`}}).then(msg => msg.delete(4000)); //CHANGE TO RICHEMBED
                message.channel.bulkDelete(args[0]).then(() => {
                message.channel.send({embed: {color: 15158332, title: "Bear Bot", description: `Cleared ${args[0]} messages.`}}).then(msg => msg.delete(3000)); //CHANGE TO RICHEMBED
                                                                  });
                                                                  }
      module.exports.help = {name:"clear"}
