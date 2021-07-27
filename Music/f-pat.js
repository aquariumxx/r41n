const Discord = require("discord.js");
const { lineReply } = require("discord-reply");
const wolf = require('nekos.life');
const neko = new wolf();

module.exports = {
  name: `pat`,
  description: "🎸",
  aliases: ["pat"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('**Mention someone to pat**');

        async function work() {
        let owo = (await neko.sfw.pat());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been patted! ")
        .setDescription((user.toString() + " got patted by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.lineReplyNoMention(patembed).catch(console.error);
}

      work();
  }
};
