const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["add"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/796122909533405195/846782460943532042/PicsArt_05-25-07.10.31.jpg`)
    .setAuthor(`Reyna`, `https://cdn.discordapp.com/attachments/843342058352541706/849755772346302484/PicsArt_05-25-07.10.31.jpg`)
    .setTitle("\`Reyna Invite your server\`")
    .setDescription("\`Reyna Link\` https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot")
    .setFooter("Thank you for invited")

  
   .setColor("#FF0000");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
