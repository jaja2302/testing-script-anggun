// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: "chrome-startup",          // nama proses di PM2
        script: "C:\Users\jaja.valentino\Desktop\testing script anggun\startup.js",     
        interpreter: "node",             // pakai Node.js
        watch: false,                    // false biar gak restart tiap file berubah
        autorestart: true,               // true biar kalau error dia restart lagi
        max_restarts: 5,                 // restart maksimal biar gak infinite loop
        restart_delay: 2000,             // delay 2 detik sebelum restart
        env: {
          NODE_ENV: "production",        // environment variable default
        },
        log_date_format: "YYYY-MM-DD HH:mm:ss", // biar log lebih rapi
      },
    ],
  };
  