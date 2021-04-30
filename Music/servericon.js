const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "servericon",
  aliases: ["icon"],
  cooldown: 8,
  description: "icon",
  execute(message) {
    let commands = message.client.commands.array();

    let wolf = new MessageEmbed()
    .setTitle("Icon Server")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("#FF0000")
    .setImage(message.guild.iconURL())
    .setFooter(message.author.username,message.author.avatarURL())
    .setTimestamp()
    message.react("✅")

    return message.channel.send(wolf).catch(console.error);

  }
};
