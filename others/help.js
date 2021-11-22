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
    .setColor(`#FF0000`)
    .setThumbnail("https://cdn.discordapp.com/avatars/712414335728615454/e0e64a900ad2587fb899f1c189d10da6.png?size=1024")
    .setAuthor("Flower Bot","","https://discord.gg/jNuC4n82QF")
    .addField("🌎 General", `\`help\`, \`ping\`, \`prefix\`, \`avatar\``)
    .addField("🎶 Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`play\`, \`queue\`, \`remove\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("❗ Info", `\`botinfo\`, \`serverinfo\`, \`userinfo\`, \`uptime\``)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
