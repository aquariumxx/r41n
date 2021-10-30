const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setAuthor("Rain Bot","https://cdn.discordapp.com/avatars/863558877168926800/db0c03ffa6aed37db32354038ea7da9d.png?size=1024","https://discord.gg/zFGGTuEmUD")
      .addField("Name", `Rain Bot`)


      .addField("Version", `12.5.3`)
      .addField(`Megabat`, (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB", false )
      .addField('Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `UnKnown#4354`)
      .setColor("#002EFF")
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
