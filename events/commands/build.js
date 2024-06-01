const { startCommand } = require("../../app");

module.exports = {
  name: "messageCreate",
  /**
   * @param {import("discord.js-selfbot-v13").Message} message
   * @param {import("discord.js-selfbot-v13").Client} client
   */
  async execute(message, client) {
    const { success, data } = await startCommand("build", message);
    if (!success) return;

    // เขียนคำสั่งที่นี่

    console.log(data);
  },
};
