const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "gifs",
  aliases: ["g"],
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
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
