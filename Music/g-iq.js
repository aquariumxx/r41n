const Discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: `iq`,
  description: "🎸",
  aliases: [""],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

   let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle(`IQ Machine`)
      .setDescription(`${Member.user.username}:  Is ${Result}% IQ 🧠`)
    

    message.lineReplyNoMention(embed).catch(console.error);

  }
};
