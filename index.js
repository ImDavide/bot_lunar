const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});

module.exports = client;

const config = require('./config.json')
const prefix = config.prefix
const token = config.token


client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`)
    
    const actvs = [
        `Official Lunar Bot`,
        `Developed by Davide`,
        `${client.channels.cache.size} canali`,
        `${client.users.cache.size} utenti`,
        `${client.guilds.cache.size} server`,
    ]

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
        setInterval(() => {
            client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
    }, 5000);

    client.user.setStatus('dnd')

    
});



//new collections
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.categories = fs.readdirSync('./commands');

//load the files
['command'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});



client.login(process.env.token)