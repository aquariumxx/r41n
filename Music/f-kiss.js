const Discord = require("discord.js");
const { lineReply } = require("discord-reply");
const sakran = require('nekos.life');
const neko = new sakran();

module.exports = {
  name: `kiss`,
  description: "🎸",
  aliases: ["Kiss"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('**Mention someone to kiss**');

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been kissed! ")
        .setDescription((user.toString() + " got kissed by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.lineReplyNoMention(kissembed).catch(console.error);

}

      work();
  }
};
