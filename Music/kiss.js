const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "kiss",
  description: "Shows a picture of people kissing",
  category: "image",
  async execute(message, args) {
    const data = await fetch("https://nekos.life/api/kiss").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const kissed = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} kissed ${kissed}`)
      .setFooter(message.author.username)
      .setColor("#FC00FF")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention(embed).catch(console.error);
  },
};
