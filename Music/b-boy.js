const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bboy",
  aliases: ["Bboy"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [""];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Banner")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
