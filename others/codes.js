const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "codes",
  aliases: ["code"],
  cooldown: 8,
  description: "**Reyna Codes**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.webp?size=1024`)
    .setTitle(`**Reyna Codes**`)
    .setDescription(`

**Moderator Command Codes**
\`.codelock\` - \`.codeunlock\`
\`.codemute\` - \`.codeunmute\`
\`.codeban\` - \`codeunban\`
\`.codeclear\`

**Info Command Codes**
\`.codegif\` - \`.codecount\`
\`.codeinvite\` - \`.codereport\`
\`.codeserver\` - \`.codebot\`
\`.codestatus\` - \`.codeprofile\`
\`.codeavatar\` - \`.codeplaying\`
\`.codegoogle\` - \`.codeactionlog\`

**Poject Command Codes**
\`.securitybot - \`.partnerbot\`
\`.musicbot\` - \`.gifsbot\`
\`.spamacc\`

**Links**
[support](https://discord.gg/7UXqeRbXk9) - [invite](https://discord.com/oauth2/authorize?client_id=776824647080738828&permissions=2201352512&scope=bot)
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
