const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setAuthor("Flower Bot","https://cdn.discordapp.com/avatars/712414335728615454/e0e64a900ad2587fb899f1c189d10da6.png?size=1024","https://discord.gg/zFGGTuEmUD")
      .addField("Name", `Flower Bot`)


      .addField("Version", `12.5.3`)
      .addField(`Megabat`, (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB", false )
      .addField('Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `<@727282746614874113>`)
      .setColor("#FF0000")
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
