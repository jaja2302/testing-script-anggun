// startup.js
const { exec } = require('child_process');

// URL yang mau dibuka
const url = '192.168.4.1';

// Deteksi sistem operasi dan buka Chrome sesuai platform
let command;

switch (process.platform) {
  case 'win32':
    // Windows
    command = `start chrome "${url}"`;
    break;
  case 'darwin':
    // macOS
    command = `open -a "Google Chrome" "${url}"`;
    break;
  case 'linux':
    command = `/usr/bin/chromium --no-sandbox --no-errdialogs --disable-infobars --start-fullscreen "${url}"`;
    break;



  default:
    console.error('Platform tidak dikenal. Jalankan manual aja, bro.');
    process.exit(1);
}

exec(command, (err) => {
  if (err) {
    console.error('Gagal buka Chrome:', err);
  } else {
    console.log(`Chrome kebuka otomatis ke ${url}`);
  }
});
