const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("./config.json");

module.exports = {
  name: "dicksize",
  aliases: [],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  async execute(message, args, client) {
    
    
    let sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8==================D"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`${Member.user.username} pp Size Is\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

   
  }
};
