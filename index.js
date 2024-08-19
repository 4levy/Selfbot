const { Client } = require("discord.js-selfbot-v13");
const { tk: TOKEN } = require("./setup/starter");
const { prefix: PREFIX } = require("./setup/config.json");

const botInfo = {
    msg: "Self Bot",
    path: "2.0.0",
    update: "18:00 11/5/2567"
};

class Library {
    constructor() {
        this.v = botInfo;
    }
}

const client = new Client();
const lib = new Library();

const loadEvents = (client) => {
    const fs = require('fs');
    const eventFolders = fs.readdirSync("./events");

    for (const folder of eventFolders) {
        const eventFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith(".js"));

        for (const file of eventFiles) {
            const event = require(`./events/${folder}/${file}`);
            if (event.rest) {
                if (event.once) {
                    client.rest.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.rest.on(event.name, (...args) => event.execute(...args, client));
                }
            } else if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    }
};

client.login(TOKEN).then(() => {
    console.clear();
    loadEvents(client);

    const messages = ["aaaaaa!", "aaaaaaaa.", "aaaaaaaa!", "aaaaaa.", "aaaa."];
    const guild = client.guilds.cache.get("1007520773096886323");
    let status = "Normal";

    const displayStatus = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        let message = messages[randomIndex];

        if (guild) {
            const member = guild.members.cache.get(client.user.id);
            if (member.roles.cache.has("1251154637503856732")) {
                status = "Supporter";
            } else {
                setTimeout(() => {
                    console.clear();
                    console.log("- Supporter Only -");
                    console.log('');
                    console.log("[+] This is a code for supporter.");
                    process.exit();
                }, 5000);
            }
        } else {
            message = "Not yet a server";
        }  

        console.clear();
        console.log(`╔[- User -]\n╚═> [ ${client.user.username} ] [ ${status} ]`);
        console.log(`╔[- Project -]\n╚═> [ ${lib.v.msg} ] [ ${lib.v.path} ] [ ${lib.v.update} ]`);
        console.log('');
        console.log(`- ${message} -`);
    };

    displayStatus();
});

const startCommand = async (commandName, message) => {
    const result = {
        success: false
    };
    if (!message.content.startsWith(PREFIX) || message.author.bot || message.author.id !== client.user.id) {
        return result;
    }

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (command !== commandName) {
        return result;
    }

    return {
        success: true,
        data: {
            command: command,
            args: args
        }
    };
};

const exportedFunctions = {
    startCommand: startCommand
};

module.exports = exportedFunctions;
