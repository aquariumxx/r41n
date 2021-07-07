const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "other",
  aliases: ["o"],
  cooldown: 8,
  description: "**Reyna Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Reyna Other**`)
    .setDescription(`

**Other Commands**
> \`.serverinfo\` - \`.userinfo\`
> \`.lock\` - \`unlock\`
> \`.ban\` - \`.unban\`
> \`.mute\` - \`.unmute\`
> \`.open\` - \`.close\`
> \`.slowmode\` - \`.giveaway\`
> \`.clear\` - \`.say\`
> \`.bans\` - \`.cv\`
> \`.create-channel \`
> \`.delete-channel \`
> \`.slap\` - \`.hug\`
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
