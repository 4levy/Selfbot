const { startCommand } = require("../../index.js");

module.exports = {
  name: "messageCreate",
  /**
   * @param {import("discord.js-selfbot-v13").Message} message
   * @param {import("discord.js-selfbot-v13").Client} client
   */
  async execute(message, client) {
    const { success, data } = await startCommand("build", message);
    if (!success) return;

    // Command here

    console.log(data);
  },
};
