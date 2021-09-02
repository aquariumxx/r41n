const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["add"],
  cooldown: 8,
  description: "**Invite**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle("Invite")
    .setDescription("**[Invite Bot](Link Bot)**")
    .setFooter("Thank you for invited")

  
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
