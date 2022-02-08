const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { lineReply } = require("discord-reply");
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
    .setThumbnail("https://discord.com/api/oauth2/authorize?client_id=912844825055854623&permissions=8&scope=bot")
    .setDescription("**Emily Links**")
    .setAuthor("Emily ✨","https://cdn.discordapp.com/avatars/912844825055854623/84ac4c7425a16a0e7b32cd6076dc3e83.png?size=1024","https://discord.gg/UybeVq66hF")
    .addField("Invite Me", "[Click](https://discord.com/api/oauth2/authorize?client_id=912844825055854623&permissions=8&scope=bot)")
    .addField("Support", "[Click](https://discord.gg/UybeVq66hF)")
    .setTimestamp()

  
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.lineReplyNoMention(helpEmbed).catch(console.error);

  }
};
