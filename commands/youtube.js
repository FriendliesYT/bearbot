const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.channel.send("http://youtube.com/friendliesplays/");
}

module.exports.help = {
  name: "youtube"
}
