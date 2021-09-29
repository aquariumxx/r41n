const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setColor(`#FF0000`)
    .setAuthor("")
    .addField("General Commands", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`status\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\`, \`github\``)
    .addField("Music Commands", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation Commands", `\`kick\`, \`ban\`, \`mute\`, \`unmute\`, \`clear\`, \`lock\`, \`unlock\`, `)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
