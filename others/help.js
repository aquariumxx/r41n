const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setColor(`#FF0000`)
    .setThumbnail("https://cdn.discordapp.com/avatars/912844825055854623/84ac4c7425a16a0e7b32cd6076dc3e83.png?size=1024")
    .setAuthor("Emily ✨","https://cdn.discordapp.com/avatars/912844825055854623/84ac4c7425a16a0e7b32cd6076dc3e83.png?size=1024","https://discord.gg/UybeVq66hF")
    .addField("🌎 General", `\`help\`, \`ping\`, \`prefix\`, \`showemoji\`, \`invite\`, \`support\`, \`avatar\``)
    .addField("🎶 Music", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`play\`, \`queue\`, \`remove\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("❗ Info", `\`botinfo\`, \`serverinfo\`, \`userinfo\`, \`uptime\``)
    .addField("<:r41n_text:940658330249101312> Text", `\`botinfo\`, \`serverinfo\`, \`uptime\``)
    .addField("<:image_mor:940526991063539712> Gif", `\`boy\`, \`girl\`, \`couple\`, \`anime\`, \`animal\``)
    .addField("<:image_juan:940527086039339048> Image", `\`pboy\`, \`pgirl\`, \`pcouple\`,  \`panimal\`, \`panime\``)
    .addField("<:fun_emily:940618427184345099> Fun", `\`kiss\`, \`slap\`, \`hug\`, \`feed\`, \`pat\`, \`poke\`, \`cuddle\``)

    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};
