const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "couple",
  aliases: ["Couple"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [
      "https://media.discordapp.net/attachments/737807251825360977/809515423929597982/image0.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800869935055634442/image3.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800873608087207966/image1.gif",
      "https://images-ext-2.discordapp.net/external/XNfBHzKy7buK63kTXnhneedCZesXjDt4YzXc4aHRyP0/https/media.discordapp.net/attachments/711465242798063706/800617858567634973/image0.gif",
      "https://media.discordapp.net/attachments/694694675679936585/800464338020204564/lietra50.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800869934360035348/image0.gif",
      "https://media.discordapp.net/attachments/672961356412092416/812128754612305930/6cabf80040d1577d55c16195bfacbeeb.gif",
      "https://images-ext-2.discordapp.net/external/Y9efztvjl_W-Qqnmd7R2NguhdL3TYXUJE95qppLUs90/https/media.discordapp.net/attachments/711465242798063706/801076445564502046/a_75e90ca13d798a0f6a85a334a457c0d1.gif",
      "https://media.discordapp.net/attachments/694694675679936585/801401776405872640/a_21574ba6d4717eeb5c9fa7cf9fb2af32.gif",
      "https://media.discordapp.net/attachments/694694675679936585/801547744543899708/agabefloransa1.gif",
      "https://media.discordapp.net/attachments/737807251825360977/809515500949995520/image1.gif",
      "https://media.discordapp.net/attachments/737807251825360977/799657955749265459/image0.gif",
      "https://media.discordapp.net/attachments/672961356412092416/812129279877840936/a_3e35eb5b37ec439dc44602a0afef93ba.gif",
      "https://media.discordapp.net/attachments/672961356412092416/812129237489287208/a_476537898e797d68d2fbce75c28c7f2b.gif",
      "https://media.discordapp.net/attachments/608711480346542102/814578335295209542/42a622d5dece84cefa3a06ef984315a5.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800870568387412008/image5.gif",
      "https://media.discordapp.net/attachments/672961356412092416/809899258290372708/ezgif-4-26f9f6d90b7c.gif",
      "https://media.discordapp.net/attachments/694694675679936585/800489743183904810/a_8d1f2e7282347d977a3bd1e0b58b7c20-1.gif",
      "https://media.discordapp.net/attachments/694694675679936585/814441253524865064/couple-1.gif",
      "https://media.discordapp.net/attachments/737807251825360977/809515517278027796/image0.gif"
];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Couple Gif")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.lineReplyNoMention(gifembed).catch(console.error);

   
  }
};
