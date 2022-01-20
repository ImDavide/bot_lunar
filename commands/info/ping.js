const { Client, Message } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Returns bot ping.',
    run: async(client, message, args) => {
        message.delete()
        const msg = await message.channel.send('Calcolando...')
        await msg.edit(`Ecco! **${client.ws.ping} ms**`)
    }
}