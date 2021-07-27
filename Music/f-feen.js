const Discord = require("discord.js");
const { lineReply } = require("discord-reply");
const wolf = require('nekos.life');
const neko = new wolf();

module.exports = {
  name: `feed`,
  description: "🎸",
  aliases: ["feed"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to feed');

        async function work() {
        let owo = (await neko.sfw.feed());

        const feedembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been feed! ")
        .setDescription((user.toString() + " got feed by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.lineReplyNoMention(feedembed).catch(console.error);

}

      work();
  }
};
