const { Client, Collection, MessageEmbed } = require("discord.js");
const {
  approveemoji,
  denyemoji,
  AVATARURL,
  BOTNAME,
  BOTCOLOR,
} = require(`../config.json`);
module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react(denyemoji);
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("<:emoji_4:815583574983966720> " + titel)
      .setColor("#FF0000")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
