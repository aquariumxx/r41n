const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setAuthor("Bots Information","https://cdn.discordapp.com/avatars/912844825055854623/84ac4c7425a16a0e7b32cd6076dc3e83.png?size=1024","https://discord.gg/UybeVq66hF")
      .addField("Name", `Emily ✨#1372`)


      .addField("Version", `12.5.3`)
      .addField(`Megabyte`, (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB", false )
      .addField('Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `<@755566952449310842>`)
      .setColor("#FF0000")
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
