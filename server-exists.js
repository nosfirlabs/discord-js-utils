const Discord = require('discord.js');

// Replace YOUR_TOKEN_HERE with your Discord bot token
const client = new Discord.Client({ token: 'YOUR_TOKEN_HERE' });

client.on('ready', () => {
  console.log('Connected to Discord');

  // Replace YOUR_SERVER_ID_HERE with the ID of the Discord server you want to check
  const server = client.guilds.cache.get('YOUR_SERVER_ID_HERE');

  if (server) {
    console.log(`Server name: ${server.name}`);
    console.log(`Server uptime: ${server.uptime}`);
  } else {
    console.log('Server not found');
  }
});

client.login();
