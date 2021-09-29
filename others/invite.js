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
    .setThumbnail("https://media.discordapp.net/attachments/857669210285146112/892779923742285834/20210929_170621.jpg")
    .setDescription("**My Invite Links**")
    .setAuthor("BlueLine","https://media.discordapp.net/attachments/857669210285146112/892779923742285834/20210929_170621.jpg","https://discord.gg/zFGGTuEmUD")
    .addField("Invite Me", "[Click](https://discord.com/oauth2/authorize?client_id=678621744122167296&scope=bot%20applications.commands&permissions=8)")
    .addField("Support", "[Click](https://discord.gg/zFGGTuEmUD)")
    .setTimestamp()

  
   .setColor("#00DAFF");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
