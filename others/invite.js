const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["add"],
  cooldown: 8,
  description: "**Invite Reyna**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle("Reyna Invite")
    .setDescription("**[Reyna](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**")

  
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
