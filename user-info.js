const Discord = require('discord.js');

// Replace YOUR_TOKEN_HERE with your Discord bot token
const client = new Discord.Client({ token: 'YOUR_TOKEN_HERE' });

client.on('ready', () => {
  console.log('Connected to Discord');

  // Replace USER_ID_HERE with the ID of the user you want to get information about
  const user = client.users.cache.get('USER_ID_HERE');

  if (user) {
    console.log(`Username: ${user.username}`);
    console.log(`Discriminator: ${user.discriminator}`);
    console.log(`ID: ${user.id}`);
    console.log(`Avatar URL: ${user.displayAvatarURL()}`);
    console.log(`Status: ${user.presence.status}`);
    console.log(`Game: ${user.presence.game ? user.presence.game.name : 'None'}`);
  } else {
    console.log('User not found');
  }
});

client.login();
