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
    .setThumbnail(`https://cdn.discordapp.com/attachments/796122909533405195/846782460943532042/PicsArt_05-25-07.10.31.jpg`)
    .setTitle(`**Reyna Help**`)
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
**Links**
**[Support](https://discord.gg/DXJVbuuJdq) - [invite](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};