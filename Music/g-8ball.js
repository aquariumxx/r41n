const Discord = require("discord.js");

module.exports = {
  name: `8ball`,
  description: "🎸",
  aliases: [""],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

   var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];
    let slaw = rand[Math.floor(Math.random()*rand.length)];
	  message.channel.send(slaw) 

    message.channel.send(embed);

  }
};
