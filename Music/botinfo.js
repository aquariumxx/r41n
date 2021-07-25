const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`Info Reyna Bot`)
      .addField("Bot Name", `<@${client.user.id}>`)
      .addField("Libary", `discord.js`)
      .addField("Discord.js Version", `12.5.3`)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `<@790233637580832788>`)
      .setColor("#0d2943")
      .setFooter(`information about bot`);
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
