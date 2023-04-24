module.exports = {
  apps: [
    {
      name: "meijin qrcode server",
      script: "npm start",
      env: {
        PORT: "8080",
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
