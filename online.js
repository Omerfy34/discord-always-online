const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

// Token'ı config.json'dan al
const config = require('./config.json');

client.on('ready', () => {
    console.log(`✅ ${client.user.tag} şimdi online! 💚`);
    console.log(`Zaman: ${new Date().toLocaleString('tr-TR')}`);
    
    // Durumu ayarla (online, idle, dnd, invisible)
    client.user.setStatus('dnd');
    
    // 1000 saat öncesinin milisaniye hesabı (1000 saat * 60 dk * 60 sn * 1000 ms)
    const binSaatOnce = Date.now() - (1090 * 60 * 60 * 1000);
    
    const rdr2Activity = new Discord.RichPresence(client)
        .setApplicationId('1498604550649675816') // Logo için Developer Portal'dan aldığınız Uygulama ID'si
        .setType('PLAYING')
        .setName('Red Dead Redemption 2')
        .setStartTimestamp(binSaatOnce);
        // .setAssetsLargeImage('rdr2_logo'); // Portal'a logo yükledikten sonra bu satırın başındaki "//" işaretlerini silip adını girin
    
    client.user.setActivity(rdr2Activity);
    
    // Her 30 saniyede durumu koru
    setInterval(() => {
        client.user.setStatus('dnd');
        client.user.setActivity(rdr2Activity);
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
