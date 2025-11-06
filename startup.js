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
    const { existsSync } = require('fs');
    if (existsSync('/usr/bin/chromium')) {
      command = `chromium "${url}"`;
    } else if (existsSync('/usr/bin/chromium-browser')) {
      command = `chromium-browser "${url}"`;
    } else if (existsSync('/usr/bin/google-chrome')) {
      command = `google-chrome "${url}"`;
    } else {
      console.error('Gak nemu browser di sistem, install Chromium dulu bro.');
      process.exit(1);
    }
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
