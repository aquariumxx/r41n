const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setAuthor("BlueLine","https://media.discordapp.net/attachments/857669210285146112/892779923742285834/20210929_170621.jpg","https://discord.gg/zFGGTuEmUD")
      .addField("Name", `<@${client.user.id}>`)
      .addField("ID", ` ${client.user.id} `, true)

      .addField("Version", `12.5.3`)
      .addField('Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Developer", `UnKnown#0069`)
      .setColor("#00DAFF")
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
