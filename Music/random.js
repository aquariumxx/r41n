const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "gif",
  description: "gif",
  category: "image",
  async execute(message, args) {
    const data = await fetch("https://g.tenor.com/v1/random?key=${tenorAPI}&q=${text}&limit=1").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}`)
      .setFooter(message.author.username)
      .setColor("#FF0000")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  },
};
