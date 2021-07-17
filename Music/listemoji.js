const { RichEmbed } = require("discord.js");

module.exports = {
  name: "listemoji",
  category: "info",
  description: "INVITE BOT",
  async execute(message, args, client) {
  
    try {
        let notAnimated = [];
        let animated = [];
        message.guild.emojis.cache.forEach(async emoji => {
          if (emoji.animated) animated.push(emoji.toString());
          else notAnimated.push(emoji.toString());
        });
        if (!animated[0]) animated = ['None'];
        if (!notAnimated[0]) notAnimated = ['None'];
        message.channel.send('**Animated:**\n' + animated.join(' ') + '\n**Normal:**\n' + notAnimated.join(' '), {split:true});
      } catch (err) {
        message.channel.send('Their was an error!\n' + err).catch();
      }
      
}
};
