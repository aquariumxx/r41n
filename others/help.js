const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Reyna Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/796122909533405195/846782460943532042/PicsArt_05-25-07.10.31.jpg`)
    .setAuthor(`Reyna ✨`, `https://cdn.discordapp.com/attachments/843342058352541706/849755772346302484/PicsArt_05-25-07.10.31.jpg`)
    .setDescription(`

**Invite Reyna ✨ to your server by [click here]()**


**To see each part of the commands**

> n!info . n!gifs . n!photo . n!utility . n!game . n!text
> 


**Need more help? Come join our [Server Server]()**
**Links**
**[Support](https://discord.gg/DXJVbuuJdq) - [invite](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot) - [Vote](https://top.gg/bot/806840212608909344/vote)**
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
