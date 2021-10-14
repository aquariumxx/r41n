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
    .setThumbnail("https://media.discordapp.net/attachments/857669210285146112/898197823026262016/BlueLineMusic.jpg")
    .setDescription("**My Invite Links**")
    .setAuthor("BlueLine","https://media.discordapp.net/attachments/857669210285146112/898197823026262016/BlueLineMusic.jpg","https://discord.gg/zFGGTuEmUD")
    .addField("Invite Me", "[Click](https://discord.com/oauth2/authorize?client_id=712414335728615454&scope=bot%20applications.commands&permissions=8)")
    .addField("Support", "[Click](https://discord.gg/zFGGTuEmUD)")
    .setTimestamp()

  
   .setColor("#002EFF");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
