const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;
      module.exports.run = async (bot, message, args) => {
        let eightballfailembed = new Discord.RichEmbed()
                                            .setColor(lightblue)
                                            .setTitle("Magic 8 Ball")
                                            .setDescription("Please ask a complete question.")
                                                          if(!args[1]) return message.channel.send(eightballfailembed).then(msg => msg.delete(5000));
                                                          let replies = [
                                                                         "Yes.",
                                                                          "No.",
                                                                          "Of course not...",
                                                                          "Well, what do you think?",
                                                                          "Of course!",
                                                                          "Uh sure.",
                                                                          "Nah, you good.",
                                                                          "Yea, fo'real.",
                                                                          "No, you on some wack shit..."
                                                                        ];
                                                          let result = Math.floor((Math.random() * replies.length));
                                                          let question = args.slice(0).join(" ");
                                                          let eightballembed = new Discord.RichEmbed()
                                                                                              .setTitle("Magic 8 Ball")
                                                                                              .setColor(lightblue)
                                                                                              .addField("Question:", question)
                                                                                              .addField("Answer:", replies[result]);
                                                          message.channel.send(eightballembed).then(msg => msg.delete(10000));
                                                         }
      module.exports.help = {
                              name:"8ball"
                            }
