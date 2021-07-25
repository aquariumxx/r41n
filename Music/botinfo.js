const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("Bot Name", `<@${client.user.id}>`)
      .addField("Bot Developer", `<@790233637580832788>`)
      .addField("Total Guilds", `${client.guilds.cache.size}`, true)
      .addField("Total Channels", `${client.channels.cache.size}`)
      .addField("Total Users", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
      .addField("Bot Libary", `discord.js`)
      .setColor("#0d2943")
      .setFooter(`information about bot`);
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
