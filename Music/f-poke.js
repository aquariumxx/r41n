const Discord = require("discord.js");
const { lineReply } = require("discord-reply");
const wolf = require('nekos.life');
const neko = new wolf();

module.exports = {
  name: `poke`,
  description: "🎸",
  aliases: ["pok"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

    const user = message.mentions.users.first();
        if(!user)
        return message.reply('**Mention someone to poke**');

        async function work() {
        let owo = (await neko.sfw.poke());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been poked! ")
        .setDescription((user.toString() + " got poked by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.lineReplyNoMention(kissembed).catch(console.error);

}

      work();
  }
};
