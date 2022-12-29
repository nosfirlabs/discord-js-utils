const Discord = require('discord.js');
const fs = require('fs');
const https = require('https');

// Replace YOUR_TOKEN_HERE with your Discord bot token
const client = new Discord.Client({ token: 'YOUR_TOKEN_HERE' });

client.on('ready', () => {
  console.log('Connected to Discord');

  // Replace USER_ID_HERE with the ID of the user whose avatar you want to download
  const user = client.users.cache.get('USER_ID_HERE');

  if (user) {
    console.log(`Username: ${user.username}`);

    // Get the user's avatar URL
    const avatarUrl = user.displayAvatarURL({ format: 'png' });

    // Download the avatar image and save it to a file
    https.get(avatarUrl, response => {
      response.pipe(fs.createWriteStream('avatar.png'));
      console.log('Avatar downloaded');
    });
  } else {
    console.log('User not found');
  }
});

client.login();
