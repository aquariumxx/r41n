const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
      .setAuthor("BlueLine","https://media.discordapp.net/attachments/857669210285146112/898197823026262016/BlueLineMusic.jpg","https://discord.gg/zFGGTuEmUD")
      .addField("Name", `BlueLineMusic#2395`)


      .addField("Version", `12.5.3`)
      .addField('Ping' , `${client.ws.ping}` , true)
      .addField("Guilds", `${client.guilds.cache.size}`, true)
      .addField("Creator", `UnKnown#4354`)
      .setColor("#002EFF")
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }));
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
