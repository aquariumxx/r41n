const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "gif",
  aliases: ["gifhelp"],
  cooldown: 8,
  description: "**Reyna Gifs**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Reyna Gifs**`)
    .setDescription(`

**Gifs Commands**
> \`.boy\` - \`.girl\` - \`.baby\`
> \`.couple\` - \`.animal\` - \`.anime\`
> \`.emoji\`
**Links**
**[Support](https://discord.gg/gwdAbxAnhg) - [Invite](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
