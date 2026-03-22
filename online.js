const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

// Token'ı config.json'dan al
const config = require('./config.json');

client.on('ready', () => {
    console.log(`✅ ${client.user.tag} şimdi online! 💚`);
    console.log(`Zaman: ${new Date().toLocaleString('tr-TR')}`);
    
    // Durumu ayarla (online, idle, dnd, invisible)
    client.user.setStatus('dnd');
    
    // Aktivite ayarla
    client.user.setActivity('Spotify', { type: 'LISTENING' });
    // PLAYING → "Valorant oynuyor"
    // WATCHING → "Netflix izliyor" 
    // LISTENING → "Spotify dinliyor"
    // STREAMING → "Twitch'te yayında"
    
    // Her 30 saniyede durumu koru
    setInterval(() => {
        client.user.setStatus('dnd');
        client.user.setActivity('Spotify', { type: 'LISTENING' });
    }, 30000);
    
    console.log('✓ Bot çalışıyor... (6 saat boyunca)');
});

client.on('error', (error) => {
    console.error('❌ Hata:', error);
});

// Giriş yap
client.login(config.token).catch(err => {
    console.error('❌ Token hatası:', err.message);
    process.exit(1);
});

// Kapanma sinyallerini yakala
process.on('SIGTERM', () => {
    console.log('⏸️ Bot durduruluyor...');
    client.destroy();
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('⏸️ Bot durduruluyor...');
    client.destroy();
    process.exit(0);
});
