const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let darkblue = botconfig.darkblue;
let purple = botconfig.purple;
let coins = require("./coins.json");
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 86400;

fs.readdir("./commands/", (err, files) =>{
                                          if(err) console.log(err);
                                          let jsfile = files.filter(f => f.split(".").pop() === "js");
                                          if(jsfile.length <= 0){
                                            console.log("Could not find command.");
                                            return;
                                          }
                                          jsfile.forEach((f, i) =>{
                                            let props = require(`./commands/${f}`);
                                            console.log(`${f} loaded!`);
                                            bot.commands.set(props.help.name, props);
                                          });
                                          });
bot.on("ready", async () =>{
                                          console.log(`\n\n\n${bot.user.username} is online!\nIt's running on ${bot.guilds.size} servers!\n\n\n`);
                                          bot.user.setActivity("over the server.", {type: "WATCHING"});});
bot.on("message", async message =>{
                                           if(message.author.bot) return;
                                           if(message.channel.type === "dm") return;
                                           let setPrefix = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
                                           if(!setPrefix[message.guild.id]){setPrefix[message.guild.id] = {setPrefix: botconfig.prefix};}
                                           if(!coins[message.author.id]){coins[message.author.id] = {coins: 0};}
                                           //let coinAmt = Math.floor(Math.random() * 1) + 1;
                                           //let baseAmt = Math.floor(Math.random() * 1) + 1;
                                           //console.log(`${coinAmt} ; ${baseAmt}`);
                                           //if(coinAmt === baseAmt){coins[message.author.id] = {coins: coins[message.author.id].coins + coinAmt};
                                           fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                           if (err) console.log(err)});



                                          let xpAdd = Math.floor(Math.random() * 7) + 8;
                                          message.channel.send(xpAdd);






                                           let prefix = setPrefix[message.guild.id].setPrefix;
                                        //    if(!message.content.startsWith(prefix + `daily`)) return;
                                        //    if(cooldown.has(message.author.id)){
                                        //    let cdtime = new Date().toLocaleTimeString();
                                        //    message.delete();
                                        //    return message.reply(`You have to wait till ${prefix} tomorrow!`)
                                        //   }
                                        //  cooldown.add(message.author.id);
                                           let msgArray = message.content.split(" ");
                                           let cmd = msgArray[0];
                                           if(cmd.slice(0, prefix.length) !== prefix) return;
                                           let args = msgArray.slice(1);
                                           let cmdFile = bot.commands.get(cmd.slice(prefix.length));
                                           if(cmdFile) cmdFile.run(bot, message, args);
                                           setTimeout(() => {
                                             cooldown.delete(message.author.id)
                                           }, cdseconds * 1000)


                                           let msg = message.content.toUpperCase();
                                           if (msg.startsWith(prefix)){message.delete();}});
bot.login(process.env.token);
