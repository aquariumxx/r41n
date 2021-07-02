const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "gif",
  description: "gif",
  category: "image",
  async execute(message, args) {
    const data = await fetch("https://g.tenor.com/v1/random?key=${tenorAPI}&q=anime&limit=50")
    .then(res => res.json())
    .then(json =>
        message.channel.send(json.results[Math.floor(Math.random() * 49)].url)
      )
    const user = message.mentions.users.first() || message.author;
    const gifs = message.author.id === user.id ? "themselfs" : user.username;

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
