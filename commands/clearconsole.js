const Discord = require("discord.js");
const fs = require("fs");

      module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission.");
        if(!args[0] || args[0 == "help"]) {
            console.clear()
            message.channel.send({embed: {color: 15158332, title: "Console", description: `The console has been cleared.`}}).then(msg => msg.delete(2000));
                                          }
                                                  }


      module.exports.help = {
        name:"clearconsole"
      }
