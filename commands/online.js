const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.channel.send("yea I'm online you're good."); //CHANGE TO RICHEMBED
}

module.exports.help = {
  name: "online"
}
