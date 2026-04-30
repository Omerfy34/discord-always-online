const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

// Token'ı ortam değişkeninden (GitHub), yoksa yerel config.json'dan al
let token = process.env.DISCORD_TOKEN;
if (!token) {
    try { token = require('./config.json').token; } 
    catch (e) { console.error('Token bulunamadı!'); }
}

// Discord süresinin ASLA sıfırlanmaması için SABİT bir başlangıç tarihi (1 Ocak 2024)
const startTime = new Date('2026-01-01T00:00:00').getTime();

client.on('ready', () => {
    console.log(`✅ ${client.user.tag} şimdi online! 💚`);
    console.log(`Zaman: ${new Date().toLocaleString('tr-TR')}`);
    
    // Durumu ayarla (online, idle, dnd, invisible)
    client.user.setStatus('dnd');
    
    const vsCodeActivity = new Discord.RichPresence(client)
        .setApplicationId('1499485718861582578') // VS Code logosu göstermek istersen Developer Portal'dan yeni bir ID alabilirsin
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('wowsy bot üzerinde çalışıyor')
        .setStartTimestamp(startTime);
        // .setAssetsLargeImage('rdr2_logo'); // Portal'a logo yükledikten sonra bu satırın başındaki "//" işaretlerini silip adını girin
    
    client.user.setActivity(vsCodeActivity);
    
    // Her 30 saniyede durumu koru
    setInterval(() => {
        client.user.setStatus('dnd');
        client.user.setActivity(vsCodeActivity);
    }, 30000);
    
    console.log('✓ Bot çalışıyor... (7/24 Bulut modu ve Sabit Süre aktif)');
});

client.on('error', (error) => {
    console.error('❌ Hata:', error);
});

// Giriş yap
client.login(token).catch(err => {
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
