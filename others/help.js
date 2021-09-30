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
    .setColor(`#00DAFF`)
    .setThumbnail("https://media.discordapp.net/attachments/857669210285146112/892779923742285834/20210929_170621.jpg")
    .setAuthor("BlueLine","https://media.discordapp.net/attachments/857669210285146112/892779923742285834/20210929_170621.jpg","https://discord.gg/zFGGTuEmUD")
    .addField("General Commands", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`status\`, \`userinfo\`, \`serverinfo\`, \`botinfo\``)
    .addField("Music Commands", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`remove\`, \`resume\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation Commands", `\`ban\`, \`mute\`, \`unmute\``)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
