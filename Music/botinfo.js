const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "botinfo",
  aliases: ["about"],
  cooldown: 5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#FF0000")
    .setAuthor("Info Reyna Bot")
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/ef9620d76b1c839097196f6fb3822c88.webp?size=1024`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .addField("**My Name** : ", `${client.user.tag} `, true)
    .addField("**My ID** : ", ` ${client.user.id} `, true)
    .addField("**My Prefix** : ", `${prefix}`, true)
    .addField("**Libary** : ", `Discord.js`, true)
    .addField("**Discord.js Version** : ", `12.5.3`, true)
    .addField('**My Ping**' , `${client.ws.ping}` , true)
    .addField("**Gulids** : ", `${client.guilds.cache.size}`, true)
    .addField("**Creator** : ", `<@790233637580832788>`, true)
    .addField("**Admins** : ", `<@749659830809002014>`, true)
   helpEmbed
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
