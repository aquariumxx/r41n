const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "text",
  aliases: ["text", "test", "testHaaaMa"],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {                                        //by HaaaMa 
    //Start
    message.delete();
    let sizes = [
      "HaaMa",
      "HaaaMaUppp", 
      "first HaaMa",
      "Makana ExoTan ", 
      "haaaMa Uppppppppooppppp",   
      "HaaaMaBest",
      "HaaaaaaaaaaaaaMa",  // lanaw aw "bashn" dane
      "HaaaMa",
      "haaaamA",
      "hatdUneearm BuD",
      "bdzn day",
      "kUrd = dze",
      "HaaaaMaaaaa",
      "HaaaMa IoppppupPppp",     /// lanaw "choonn" sh3r sht danen
      "poli 6 ",
      "StuedEnnnt",
      "Rozhek darom",
      "mawayaka wak jaran namawe",
      "تا کاەی...!؟"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      //by HaaaMa
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor("RANDOM") /// HaaaMa 
      .setTitle(``)
      .setDescription(`**\n${Result}**`)
   // .setFooter(`Requested by ${message.author.username}`)
  //    .setTimestamp();
    message.channel.send(embed);

    //End
  }
};
