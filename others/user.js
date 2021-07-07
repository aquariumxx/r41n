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
    .setTitle(`**Reyna Help**`)
    .setDescription(`

**User Commands**
> \`.invite\` - \`.support\` - \`.about\`
> \`.ping\` - \`.prefix\` - \`.uptime\`
> \`.se\` - \`.avatar\` - \`.embed\`
> \`.invites\` - \`.emojiinfo\` - \`.count\`
> \`.servericon\` - \`.vote\`
`)


   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
