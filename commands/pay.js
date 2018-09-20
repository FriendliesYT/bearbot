const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
      module.exports.run = async (bot, message, args) => {
        let uCoins = coins[message.author.id].coins;
                                                                                                let noCoins = new Discord.RichEmbed()
                                                                                                .setColor("#FF0000")
                                                                                                .setTitle(message.author.username + `, you don't have any coins 💰`);
                                if(!coins[message.author.id]){
                                  return message.channel.send(noCoins).then(msg => {msg.delete(5000)});}
                                                                                                let notCoinSyntax = new Discord.RichEmbed()
                                                                                                .setColor("#FF0000")
                                                                                                .setTitle("Pay Command Syntax:")
                                                                                                .setDescription(`Usage: !pay <user> <amount>`);
                                if(!args[0]) return message.channel.send(notCoinSyntax).then(msg => msg.delete(10000));
                                let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                                if(!coins[pUser.id]){
                                  coins[pUser.id] = {
                                    coins: 0
                                  };
                                }
                                let pCoins = coins[pUser.id].coins;
                                let sCoins = coins[message.author.id].coins;
                                                                                                let notEnoughCoins = new Discord.RichEmbed()
                                                                                                .setColor("#FF0000")
                                                                                                .setTitle(message.author.username + `, you don't have enough coins 💰`)
                                                                                                .setDescription(`Your balance is ${uCoins} coins 💰`);
                                if(sCoins < args[1]) return message.reply(notEnoughCoins).then(msg => msg.delete(5000));
                                coins[message.author.id] = {
                                  coins: sCoins - parseInt(args[1])
                                };
                                coins[pUser.id] = {
                                  coins: pCoins + parseInt(args[1])
                                };
                                                                                                let sentCoins = new Discord.RichEmbed()
                                                                                                .setColor("#FF0000")
                                                                                                .setDescription(`${message.author} has given ${args[0]} ${args[1]} coins 💰`);
                                message.channel.send(sentCoins).then(msg => msg.delete(5000));
                                fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                  if(err) console.log(err)
                                });
}
      module.exports.help = {
        name:"pay"
      }
