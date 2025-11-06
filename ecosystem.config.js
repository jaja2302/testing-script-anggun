module.exports = {
  apps: [{
    name: "buka_chrome",
    script: "startup.js",
    env: {
      DISPLAY: ":0",
      XAUTHORITY: "/home/raspiclaybath/.Xauthority"
    }
  }]
};
