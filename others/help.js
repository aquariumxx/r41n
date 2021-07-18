const { MessageEmbed } = require("discord.js"); 

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('#FF0000')
    .addField("Other Commands", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`status\`, \`invites\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\``)
    .addField("Music Commands", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation Commands", `\`kick\`, \`ban\``)
    .addField("Gif Commands", `\`boygif\`, \`girlgif\`, ‌\`couplegif\`, \`animegif\`, \`emojigif\`, \`animalgif\``)
    .addField("Text Commands", `\`textkurdish\`, \`textarabic\`, \`textenglish\`, \`textturkish\`, \`textpersian\``)
    .addField("Fun Commands", `\`slap\`, \`hug\`, \`howgay\`,‌ \`rate\`, \`meme\`, \`cry\`, \`kiss\``)
    .addField("Backup Commands", `\`backup-create\`, \`backup-load\`, \`backup-info\``)
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
