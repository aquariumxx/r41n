const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "text",
  aliases: ["TextArabic", "Textarabic", "TEXTARABIC", "ta"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = [""];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('<a:emoji_3:865956590484848640>').then(r => {
				message.react('<a:emoji_2:865956568738693172>');
           });
          });
      }
}
