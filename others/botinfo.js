const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "botinfo",
  aliases: ["about"],
  cooldown: 8,
  description: "**Reyna Codes**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/796122909533405195/846782460943532042/PicsArt_05-25-07.10.31.jpg`)
    .setTitle("Info Reyna Bot")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .addField("**My Name** : ", `${client.user.tag} `, true)
    .addField("**My ID** : ", ` ${client.user.id} `, true)
    .addField("**My Prefix** : ", `${prefix}`, true)
    .addField('**Libary**' , `discord.js` , true)
    .addField('**Discord.js Version**' , `12.5.3` , true)
    .addField('**My Ping**' , `${client.ws.ping}` , true)
    .addField("**Servers** : ", `${client.guilds.cache.size}`, true)
    .addField("**Owner Bot** : ", `<@790233637580832788>`, true)


   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
