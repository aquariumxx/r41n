const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "user",
  aliases: ["u"],
  cooldown: 8,
  description: "**Reyna Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/839167158360997915/845604078955921408/782683837385146428.png`)
    .setTitle(`**Reyna Help**`)
    .setDescription(`

**User Commands**
> \`.invite\` - \`.support\` - \`.about\`
> \`.ping\` - \`.prefix\` - \`.uptime\`
> \`.se\` - \`.avatar\` - \`.embed\`
> \`.invites\`
**Links**
**[Support](https://discord.gg/DXJVbuuJdq) - [invite](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
