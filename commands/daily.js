const Discord = require("discord.js");
const fs = require("fs");
const prefix = require("../prefixes.json");
let userCooldown = {};
const botconfig = require("../botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;
let coins = require("../coins.json");

      module.exports.run = async (bot, message, args) => {
                    let uCoins = coins[message.author.id].coins;
                    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

                        let dailySuccessful = new Discord.RichEmbed()
                        .setColor("#ff0000")
                        .setTitle("Daily Coins")
                        .setDescription(`${message.author.username}, you have recieved 100 coins 💰\nYour new balance is ${uCoins + 100} coins 💰`)


                        let msg = message.content.toUpperCase();








if (msg = (prefix + 'DAILY')){
if (userCooldown[message.author.id]) {
userCooldown[message.author.id] = false;
message.channel.send(dailySuccessful);
coins[message.author.id] = {coins: uCoins + 100};
setTimeout(() => {
userCooldown[message.author.id] = true;
}, 300000) // 5 minutes
}
}


//if (msg = (prefix + 'DAILY')){
//message.channel.send(dailySuccessful);
//coins[message.author.id] = {
//coins: uCoins + 100
//};
//}








                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                          if(err) console.log(err)
                        });





                                                         }
      module.exports.help = {
        name:"daily"
      }
