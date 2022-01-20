module.exports = {
    name: 'scrivi',
    description: 'Say a message with the bot.',
    run: async(client, message, args) => {
        let msg;
        let textchannel = message.mentions.channels.first() //trova il canale che hai menzionato
        
        if(!args[0]) { // se non hai scritto nulla il bot ti rispondera cosi
            return message.reply({ content: '**Specifica cosa vuoi dire!**'})
        }else if(textchannel) { //se menzioni un canale il messaggio lo mandera li
        message.delete()
            msg = args.slice(1).join(' '); // per esempio: !scrivi #generale matty è frºcio
            client.channels.cache.get(textchannel.id).send({ content: msg }) //dopo mandera il messaggio nel canale che hai menzionato
        }else{
          message.delete()
            msg = args.join(' '); //questo codice serve per ricevere il messaggio che vuoi inviare
            message.channel.send({ content: msg })//dopo mandera il messaggio
        }
    }
}