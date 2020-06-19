// Imports
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const Handler = require('./src/classes/command-handler');

const triggerKey = ";";
// const server = client.guilds.cache.get(serverID);
const handler = new Handler(triggerKey);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // Let Handler take care of commands
  handler.handleCommands(msg);
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
