const Discord = require("discord.js");
const fs = require("fs");
      module.exports.run = async (bot, message, args) => {

        let helpEmbed = new Discord.RichEmbed()
        .setColor(lightblue)
        .setTitle("**BEAR BOT**")
        .setDescription('⚪︎ !coins\n⚪︎ !pay\n⚪︎ !8ball\n⚪︎ !goodnight\n⚪︎ !online\n⚪︎ !youtube');

        message.channel.send(helpEmbed).then(msg => (msg.delete(10000))); //CHANGE TO RICHEMBED
      }

      module.exports.help = {
        name:"help"
      }
