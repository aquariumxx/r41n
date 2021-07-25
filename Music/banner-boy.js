const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "bboy",
  aliases: ["Bboy"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = ["https://images-ext-2.discordapp.net/external/ePgwFi2QgfwWkWIAp8OcUEWGPUsLwGV6aAEhRpSoTa8/https/media.discordapp.net/attachments/857719083050729492/862355938535145472/nazli_6.gif", "https://images-ext-2.discordapp.net/external/CxMlsp43ZewVQByxlReGVZfwSn32gN8pwoRzlBWMUtY/https/media.discordapp.net/attachments/857719083050729492/862979751618674728/20210623_084119.gif", "https://images-ext-1.discordapp.net/external/FCz6PUvvry1yCNyuBpNQVGyLBFG0K5z-mQJHWkICyYQ/https/media.discordapp.net/attachments/857719083050729492/858287205885280266/ef755836ab290fb0985af67f3f3652a7.gif", "https://images-ext-1.discordapp.net/external/cWRTImxJ1Cb4ofVKEgi6Nx1CkziVKjS1sX8kWyN2JFc/https/media.discordapp.net/attachments/857719083050729492/862356373160067122/nazli_8.gif", "https://images-ext-1.discordapp.net/external/RqjnhFRjUiD5Qigg3ow5Y6QAWLzHf_hPW1hULjsO5aI/https/media.discordapp.net/attachments/857719083050729492/862355602049990686/nazli_2.gif", "https://images-ext-2.discordapp.net/external/a0pZDFMslW9DJgdO28C60MoRdG448QQhC2F1oxpKdYA/https/media.discordapp.net/attachments/857719083050729492/862355650075557889/nazli_3.gif", "https://images-ext-1.discordapp.net/external/3zbnm5bWz3vLO_c8hWobiIUQlkHkmjwASVwm-_IAiB0/https/media.discordapp.net/attachments/857719083050729492/858287215637561364/352f0bf2b711f94f0197a84f8a02ba8d.gif", "https://images-ext-2.discordapp.net/external/2sMOF1waKq6YezGkkV3VDPZMSPTxGoBuTRsRrtH4rSA/https/media.discordapp.net/attachments/857719083050729492/862356009896771635/nazli_7.gif", "https://images-ext-2.discordapp.net/external/Bhnf_PM509Wx6xwgegExl_eGYtlfvH1OfGxp6qCGctQ/https/media.discordapp.net/attachments/857719083050729492/864747708433956874/13.gif", "https://images-ext-1.discordapp.net/external/ooml3JHVig16QD-T9r4ItDULnB8r3VHRzj3sWDbKekU/https/media.discordapp.net/attachments/857719083050729492/862355837204168704/nazli_9.gif", "https://images-ext-1.discordapp.net/external/o1hOa9qfm2pJ4vWO7DgcaRKNanHyTcSeFum-aWfh8EY/https/media.discordapp.net/attachments/857719083050729492/858287216626368532/c80e8a441ea282d9947006c15ea349b5.gif", "https://images-ext-2.discordapp.net/external/ezFf_-Miu7_RXouMFbVrYggdohRLVmu3sLlUC1Y5sCc/https/media.discordapp.net/attachments/857719083050729492/866880955418673202/tumblr_a43752c0bb024cfbb1626173f451dd98_5cdfea75_400.gif", "https://images-ext-1.discordapp.net/external/3hlggAmPIUiLwmoGSz3kvLCnOixe84RdaJe054ENJmY/https/media.discordapp.net/attachments/857719083050729492/865309422666383370/I1k4.gif", "https://images-ext-1.discordapp.net/external/KWL08RJVf8fbLOU9yTzQ-5VqmN3hxxSBU8WrZuBcIVU/https/media.discordapp.net/attachments/857719083050729492/862355860655570944/nazli_4.gif"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Banner")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.lineReplyNoMention(gifembed).catch(console.error);

   
  }
};
