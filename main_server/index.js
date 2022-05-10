const express = require("express");
const app = express();

const QRCode = require("qrcode");

app.get("/", (req, res) => {
  if (req.query.data) QRCode.toFileStream(res, req.query.data);
  else res.json({ msg: "Welcome qrcode server" });
});

app.listen(8080, () => {
  console.log("Server start at 8080");
});
