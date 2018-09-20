///////////////////////////////////////////////////////////////
//                                                           //
//                                                           //
//                       HELP COMMAND                        //
//                   USAGE: ${prefix}help                    //
//                                                           //
//                                                           //
///////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const fs = require("fs");
      module.exports.run = async (bot, message, args) => {
        message.channel.send(
          {embed:{
            color: 15158332,
            title: "Help Menu",
            description: `― !8ball\n― !youtube\n― !online\n― !goodnight\n― !coins 💰\n― !pay 💰`}}).then(msg => (msg.delete(10000))); //CHANGE TO RICHEMBED
      }

      module.exports.help = {
        name:"help"
      }
