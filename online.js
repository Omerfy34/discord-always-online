const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

// Token'ı config.json'dan al (GitHub Actions oluşturacak)
const config = require('./config.json');

client.on('ready', () => {
    console.log(`✅ ${client.user.tag} şimdi online! 💚`);
    console.log(`Süre: ${new Date().toLocaleString('tr-TR')}`);
    
    // Durumu ayarla
    client.user.setStatus('dnd'); // online, idle, dnd, invisible
    
    // Aktivite ayarla
    client.user.setActivity('Spotify', { type: 'LISTENING' });
    // PLAYING, WATCHING, LISTENING, STREAMING
    
    // Her 30 saniyede durumu koru
    setInterval(() => {
        client.user.setStatus('dnd');
        client.user.setActivity('Spotify', { type: 'LISTENING' });
    }, 30000);
    
    console.log('Bot çalışıyor... (28 dakika)');
});

client.on('error', (error) => {
    console.error('Hata:', error);
});

// Giriş yap
client.login(config.token).catch(err => {
    console.error('Token hatası:', err.message);
    process.exit(1);
});

// Kapanma sinyallerini yakala
process.on('SIGTERM', () => {
    console.log('Bot durduruluyor...');
    client.destroy();
    process.exit(0);
});
