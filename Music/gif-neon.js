const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "neongif",
  aliases: ["neon", "Neon", "NEON", "NEONGIF", "NeonGif"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [
      "https://cdn.discordapp.com/attachments/764927608013193276/788707397609979914/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942276217372672/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942418513461328/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/782272576885096468/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942291785973800/image0.gif",
      "https://cdn.discordapp.com/attachments/767332506101219348/796047924865138758/gifcity58.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/793756128646922270/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942413123125309/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/780790908060172308/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/791247223282335784/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/773386784272810024/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/764931887810478080/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/784420144617095178/a_b5b818f02a358b8463b59e7add4cb24c-1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/779428418605023252/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/768134950658244608/image7.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942442193453096/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801941864369881098/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/793756075219615754/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/784345886070407208/image0.gif",
      "https://cdn.discordapp.com/attachments/767332506101219348/780471732195557397/devaergagr.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/793756604561883136/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/793756092261072936/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/796025346340028466/image0.gif"
];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Neon Gif")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.lineReplyNoMention(gifembed).catch(console.error);

   
  }
};
