const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ss",
  description: "Make an embed!",
  usage: "<hex color> <text>",
  run : async(client, message, args) => {
	message.delete()

const exampleEmbed = new MessageEmbed()
	.setColor('#f00505')
	.setTitle('***__SS Team__***')
	.setDescription('Squadra anticheater che garantisce una **esperienza di gioco ottimale e leale**')
	.setThumbnail('https://imgur.com/0MNNReL.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

message.channel.send({ embeds: [exampleEmbed] });

     }

}