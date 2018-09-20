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
        if(!message.member.hasPermission("ADMINISTRATOR")) {return message.reply("You don't have permission.");}
        if(!args[0] || args[0 == "help"]) {return message.channel.send({embed: {color: 15158332, title: "Syntax:", description: `Usage: !shutdown <initiate>`}}).then(msg => msg.delete(4000));} //CHANGE TO RICHEMBED
            message.channel.send({embed: {color: 15158332, title: "Console:", description: `Shutting Down.`}}).then(msg => msg.delete(4000)); //CHANGE TO RICHEMBED
            setTimeout((function() {
                return process.exit(1);
            }), 1000);
          }
      module.exports.help = {
        name:"shutdown"
      }
