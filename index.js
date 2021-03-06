const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
const token = require("./token.json");
let red = botconfig.red;
let orange = botconfig.orange;
let yellow = botconfig.yellow;
let green = botconfig.green;
let lightblue = botconfig.lightblue;
let botblue = botconfig.botblue;
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
                                          console.log(`${message.author.id}: + ${xpAdd} xp.`);
                                          if(!xp[message.author.id]){
                                            xp[message.author.id] = {
                                              xp: 0,
                                              level: 1
                                            };
                                          }
                                          let curxp = xp[message.author.id].xp;
                                          let curlvl = xp[message.author.id].level;
                                          let nxtLvl = xp[message.author.id].level * 300;
                                          xp[message.author.id].xp = curxp + xpAdd;
                                          if(nxtLvl <= xp[message.author.id].xp){
                                            xp[message.author.id].level = curlvl + 1;

                                          let lvlup = new Discord.RichEmbed()
                                            .setTitle("**BEAR BOT**")
                                            .setColor(purple)
                                            .setDescription(`${message.author.username}, you are now level ${curlvl + 1}!`);
                                            message.channel.send(lvlup).then(msg => {msg.delete(5000)});
                                          }
                                          fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                            if(err) console.log(err)
                                          });
                                          ////////////START OFF HERE




                                           let prefix = setPrefix[message.guild.id].setPrefix;
                                           
  
  
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
bot.login(token.token);
