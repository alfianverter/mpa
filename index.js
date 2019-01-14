const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const {color} = require('./config.json');
const queue = new Map();
const key = process.env.YT_API;
const fs = require("fs");
const moment = require("moment");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(key);
const opus = require("opusscript");
const gyp = require("node-gyp");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


music.on('message', async message => {

    let prefix = 'mpk!';
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }

if (message.content === "mpk!join")
  {
      message.member.voiceChannel.join()
                    .then(connection => {
    console.log("joined channel");
      	const dispatcher = connection.playStream(ytdl(`https://www.youtube.com/watch?v=XggKv1RhQYo`))
        	connection.dispatcher.setVolumeLogarithmic(1);
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`Music Player Kpop, Joined Your Voice channel <a:a:532595746638397440>`)
.setColor("RANDOM")
                         })
function tetew() {
    console.log("joined channel");
    const pokesamwan = [ //KATAKATAPOKESAMWAN
        `https://www.youtube.com/watch?v=ToCuK4UJVRQ&t=14s`,
        `https://www.youtube.com/watch?v=0cQG2J4KE5E`, 
        `https://www.youtube.com/watch?v=MzKFCcqU3zA`,
        `https://www.youtube.com/watch?v=VtC0nT7_Qvs`,
        `https://www.youtube.com/watch?v=EHH-HhYX0dk`,
        `https://www.youtube.com/watch?v=0cQG2J4KE5E`,
        `https://www.youtube.com/watch?v=feXwPDeXvLs`,
        `https://www.youtube.com/watch?v=G3eIpaKEziI`,
        `https://www.youtube.com/watch?v=hpSHy-lHEac`

    ];
const wordAnswer = pokesamwan[Math.floor(Math.random() * pokesamwan.length)]

      	const dispatcher = connection.playStream(ytdl(`${wordAnswer}`))
        	connection.dispatcher.setVolumeLogarithmic(1);
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`Radio Music Next <a:a:532595746638397440>`)
.setColor("RANDOM")
                         })
}; setInterval(tetew, 1800000)
                        
 })

  }
});

music.login(process.env.TOKEN);

music.on("ready", async () => {
function botStatus() {  
let status = [
`mpk!join - mpk!leave`,
`in ${music.guilds.size} server.`,
`24H active`,
`https://discord.gg/3pe7c6h`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  music.user.setActivity(status[rstatus], {Type: 'STREAMING', url:'https://www.twitch.tv/verterid'});
}; setInterval(botStatus, 10000)    
console.log("ready");
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)
});
