const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const botconfig = require("../botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;

      module.exports.run = async (bot, message, args) => {
                if(!coins[message.author.id]){
                  coins[message.author.id] = {
                    coins: 0
                  };
                }
                    let uCoins = coins[message.author.id].coins;
                    let coinEmbed = new Discord.RichEmbed()
                    .setColor("ff0000")
                    .setTitle(`Bear Bank`)
                    .setDescription(`You have ${uCoins} coins 💰`);
                    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
                       }
      module.exports.help = {
        name:"coins"
      }

//
//SAMPLE RICH EMBED
//let TEMPLATE = new Discord.RichEmbed()
//                                    .setColor("COLOR")
//                                    .setTitle("TITLE")
//                                    .setDescription("DESCRIPTION")
//message.channel.send(TEMPLATE).then(msg => msg.delete(TIME));
