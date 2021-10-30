const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["add","inv"],
  cooldown: 3,
  description: "**Invite**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/863558877168926800/db0c03ffa6aed37db32354038ea7da9d.png?size=1024")
    .setDescription("**My Invite Links**")
    .setAuthor("Rain Bot","https://cdn.discordapp.com/avatars/863558877168926800/db0c03ffa6aed37db32354038ea7da9d.png?size=1024","https://discord.gg/jNuC4n82QF")
    .addField("Invite Me", "[Click](https://discord.com/api/oauth2/authorize?client_id=863558877168926800&permissions=8&scope=bot)")
    .addField("Support", "[Click](https://discord.gg/jNuC4n82QF)")
    .setTimestamp()

  
   .setColor("#002EFF");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
