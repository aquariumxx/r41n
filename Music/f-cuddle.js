const Discord = require("discord.js");
const { lineReply } = require("discord-reply");
const wolf = require('nekos.life');
const neko = new wolf();

module.exports = {
  name: `cuddle`,
  description: "🎸",
  aliases: ["cuddl"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('**Mention someone to cuddle**');

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You just got a cuddle! ")
        .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.lineReplyNoMention(cuddleembed).catch(console.error);

}

      work();
  }
};
