const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "photo",
  aliases: ["photohelp"],
  cooldown: 8,
  description: "**Reyna Photo**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Reyna Photo**`)
    .setDescription(`

**Gifs Commands**
> \`.pboy\` - \`.pgirl\` - \`.pbaby\`
> \`.pcouple\` - \`.panimal\` - \`.panime\`
> \`.pemoji\`
**Links**
**[Support](https://discord.gg/gwdAbxAnhg) - [Invite](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**
`)

   .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
    return message.channel.send(helpEmbed).catch(console.error);

  }
};