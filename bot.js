const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const triggerKey = ";";
const server = client.guilds.cache.get(serverID);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === triggerKey+'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content.includes(triggerKey+'healot')) {
    var mentioned = msg.mentions.users.first();
      guild.systemChannel.send("<@" + mentioned.id + "> has joined the server!");
    
    try{
      var mentioned = msg.mentions.users.first();
      guild.systemChannel.send("<@" + mentioned.id + "> has joined the server!");
    }
    catch{
      msg.reply("Who should I healot?")
    }

    
  }
});

client.login(auth.token);
