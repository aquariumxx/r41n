const discord = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
    let embed = new discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Info Reyna Bot")
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/ef9620d76b1c839097196f6fb3822c88.webp?size=1024`)
    .addField("**My Name** : ", `${client.user.tag} `, true)
    .addField("**My ID** : ", ` ${client.user.id} `, true)
    .addField("**My Prefix** : ", `${prefix}`, true)
    .addField('**Libary**' , `discord.js` , true)
    .addField('**Discord.js Version**' , `12.5.3` , true)
    .addField('**Ping**' , `${client.ws.ping}` , true)
    .addField("**Servers** : ", `${client.guilds.cache.size}`, true)
    .addField("**Creator** : ", `<@790233637580832788>`, true)
      message.lineReplyNoMention(embed).catch(console.error);
  }
};
