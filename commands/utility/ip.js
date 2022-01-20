const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ip",
  description: "Make an embed!",
  usage: "<hex color> <text>",
  run : async(client, message, args) => {
message.delete()
const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('__Ecco gli **IP** per connettersi al nostro server__')
	.setDescription('Some description here')
	.setThumbnail('https://imgur.com/TxILJfY.gif')
	.addField("**IP FIVEM**", "➔ ***lunar-rp.it***⠀ oppure clicca direttamente [**qui**](https://cfx.re/join/dzbgy5)")
	.addField("**IP TEAMSPEAK**", "➔ ***ts.lunar-rp.it***")
	.setTimestamp('')
	.setFooter({ text: 'Lunar developement', iconURL: 'https://imgur.com/TxILJfY.gif' });

message.channel.send({ embeds: [exampleEmbed] });

     }

}