const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "banime",
  aliases: ["Banime"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = ["https://images-ext-1.discordapp.net/external/nqQTnCEDscNH7xEaihny5SvhH70X0RSREyjL5Zaf6Cc/https/media.discordapp.net/attachments/857719424966852678/865786152573075466/36113e3f191c49d87eadb6578216045b.gif", "https://images-ext-1.discordapp.net/external/EF2F8i11lbsSGCbAaIxAkQ963TIYWrmdlAGL028RUHk/https/media.discordapp.net/attachments/857719424966852678/858212058030276608/laura_anime_banner_gif_4.gif", "https://images-ext-1.discordapp.net/external/vVWUSqMn_fUPASgB8P4Y9f-eQvG9Ezmm3jlVG9nm3Zo/https/media.discordapp.net/attachments/857719424966852678/858212135091830814/laura_anime_banner_gif_8.gif"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Anime Banner")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.lineReplyNoMention(gifembed).catch(console.error);

   
  }
};
