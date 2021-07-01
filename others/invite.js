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
    message.react("<:emoji_15:830469967752724500>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#FFF712").setTitle("💛 Please Invite me: ").setDescription("https://discord.com/api/oauth2/authorize?client_id=811955068563488788&permissions=8&scope=bot")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/avatars/811955068563488788/0d2f650ba4544decd768924878747a3b.webp?size=1024"));
  }
}
