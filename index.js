const { launcher } = require("@loybung/launcher");
const path = require("path");

app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`🔗 Listening to port : http://localhost:${port}`);
});

const options = {
  url: "https://loybung.vercel.app/api/project/selfbot",
  filepath: path.resolve(__dirname, "app.js"),
};

launcher(options, (run) => {
  run();
});
