const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();
const config = require('./config.json'); // Token'ı buradan al

client.on('ready', () => {
    console.log(`✅ ${client.user.tag} artık 7/24 online! 💚`);
    
    client.user.setStatus('dnd');
    client.user.setActivity('Spotify', { type: 'LISTENING' });
    
    setInterval(() => {
        client.user.setStatus('dnd');
        client.user.setActivity('Spotify', { type: 'LISTENING' });
    }, 30000);
});

client.login(config.token); // Token config'den geliyor