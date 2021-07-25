const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setTitle(`Info Reyna Bot`)
      .addField("My Name", `<@${client.user.id}>`)
      .addField("My ID", ` ${client.user.id} `, true)
      .addField("Libary", `discord.js`)
      .addField("Discord.js Version", `12.5.3`)
      .addField('My Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `<@790233637580832788>`)
      .addField("Helper", `<@690934381597949955>`)
      .setColor("#FF0000")
      .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/ef9620d76b1c839097196f6fb3822c88.webp?size=1024`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
