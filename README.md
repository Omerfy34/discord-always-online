# 🤖 Discord Always Online Bot

Discord hesabınızı 7/24 online tutan otomatik bot.

## ✨ Özellikler

- 🟢 7/24 online kalır
- 🎵 Özel aktivite gösterimi (Spotify, oyun vs.)
- 🔴 Durum ayarı (Online, Rahatsız Etme, Boşta)
- ☁️ GitHub Actions ile ücretsiz bulutta çalışır
- 🔒 Token güvenli şekilde saklanır
- ⚡ Her 6 saatte otomatik yeniden başlar

## 🚀 Kurulum

### 1. Bu repo'yu fork'la veya kopyala

### 2. Discord Token'ını Al

1. Discord'u tarayıcıda aç: https://discord.com/app
2. `F12` tuşuna bas
3. `Application` → `Local Storage` → `discord.com`
4. `token` değerini kopyala (tırnaksız!)

### 3. GitHub Secrets'a Token Ekle

1. Repo → `Settings` → `Secrets and variables` → `Actions`
2. `New repository secret`
3. **Name:** `DISCORD_TOKEN`
4. **Secret:** (Kopyaladığın token - TIRNAKSIZ!)
5. `Add secret`

### 4. Çalıştır

1. `Actions` sekmesine git
2. `Discord Always Online Bot` workflow'u seç
3. `Run workflow` → `Run workflow`

✅ Bot her 6 saatte otomatik çalışacak!

## ⚙️ Özelleştirme

`online.js` dosyasında:

### Durum Değiştir:
```javascript
client.user.setStatus('dnd');
// online → Yeşil nokta
// idle → Sarı nokta (Boşta)
// dnd → Kırmızı nokta (Rahatsız Etme)
// invisible → Görünmez
