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
    .setThumbnail("https://cdn.discordapp.com/avatars/863558877168926800/db0c03ffa6aed37db32354038ea7da9d.png?size=1024")
    .setAuthor("Rain Bot","https://cdn.discordapp.com/avatars/863558877168926800/db0c03ffa6aed37db32354038ea7da9d.png?size=1024","https://discord.gg/jNuC4n82QF")
    .addField("🌎 General", >`\`help\`, \`ping\`, \`prefix\`, \`avatar\``)
    .addField("🎶 Music", `>\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`play\`, \`queue\`, \`remove\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("❗ Info", `>\`botinfo\`, \`serverinfo\`, \`userinfo\`, \`status\`, \`uptime\``)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
