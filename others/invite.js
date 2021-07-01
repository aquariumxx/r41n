const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<:emoji_4:815583574983966720>");
    //send the invite embed
    message.reply(new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/796122909533405195/846782460943532042/PicsArt_05-25-07.10.31.jpg`)
    .setAuthor(`Reyna`, `https://cdn.discordapp.com/attachments/843342058352541706/849755772346302484/PicsArt_05-25-07.10.31.jpg`)
    .setTitle("\`Reyna Invite your server\`")
    .setColor("#FF0000")
    .setDescription("\`Reyna Link\` https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot")
    .setFooter("Thank you for invited"));
  }
}
