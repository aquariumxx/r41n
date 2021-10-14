const Discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "status",
  aliases: ["st","stats"],
  description: "Show status of akeno",
  usage: "status",
  async execute(message, args, client) {
    const embed = new Discord.MessageEmbed()
        .setColor("#00DAFF")
        .addField("• Guilds", `${client.guilds.cache.size}`, true)
        .addField("• Users", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
        .addField("• Channels", `${client.channels.cache.size}`, true)
        .addField(`• Voice Connections`, `${client.voice.connections.size}`, false)
        .addField(`• Uptime`, uptime.join(", "), false)
        .addField("• Prefix", "u! or custom")
        .setFooter(message.author.username, message.author.avatarURL);
    message.lineReplyNoMention(embed);
}
}
