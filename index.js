const { launcher } = require("@loybung/launcher");
const path = require("path");

const options = {
  url: "https://loybung.vercel.app/api/project/selfbot",
  filepath: path.resolve(__dirname, "app.js"),
};

launcher(options, (run) => {
  run();
});
