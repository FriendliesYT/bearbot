///////////////////////////////////////////////////////////////
//                                                           //
//                                                           //
//                      PREFIX COMMAND                       //
//                                                           //
//                                                           //
///////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const fs = require("fs");
const prefix = require("../prefixes.json");
const index = require("../index.js");
const botconfig = require("../botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;
      module.exports.run = async (bot, message, args) => {

  ///////////////////////////////////////////////////////////////
  //                    PREFIX VAR DEFINED                     //
    let setPrefix = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    let prefix = setPrefix[message.guild.id].setPrefix;    //
      console.log(`                    The current prefix is ${prefix}`);
  //                                                           //
  ///////////////////////////////////////////////////////////////


  let prefixEmbed = new Discord.RichEmbed()
                                      .setColor(red)
                                      .setTitle(`Current prefix: "${prefix}"`)
                                      .setDescription(`Usage: ${prefix}prefix <prefix>`)



  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission.");
  if(!args[0] || args[0 == "help"]) {
                                    return message.channel.send(prefixEmbed).then(msg => msg.delete(10000));
                                    }




  setPrefix[message.guild.id] = {
    setPrefix: args[0]
  };


  fs.writeFile("./prefixes.json", JSON.stringify(setPrefix), (err) => {
    if (err){
            console.log(err)
              }
  });
  message.channel.send({embed:{
                              color: 15158332,
                              title: "Prefix Set.",
                              description: `Set to ${args[0]}`
                              }})}

      module.exports.help = {
        name:"prefix"
      }
