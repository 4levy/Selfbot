const { Launcher } = require("@loybung/launcher");
const { resolve } = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Port : http://localhost:${port}`);
});

const app = new Launcher("https://loybung.vercel.app/api/project/selfbot");

app.setPath(resolve(__dirname, "./app.js"));
app.setExpire(null);

app.Run().catch((err) => console.log(err.message));
