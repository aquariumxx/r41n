const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setColor(`#002EFF`)
    .setThumbnail("https://media.discordapp.net/attachments/835673002079027200/851988426945200138/image0-2.gif")
    .setAuthor("Rain Bot","https://media.discordapp.net/attachments/835673002079027200/851988426945200138/image0-2.gif","https://discord.gg/jNuC4n82QF")
    .addField("🌎 General", `\`help\`, \`ping\`, \`prefix\`, \`avatar\``)
    .addField("🎶 Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`play\`, \`queue\`, \`remove\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("❗ Info", `\`botinfo\`, \`serverinfo\`, \`userinfo\`, \`status\`, \`uptime\``)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
