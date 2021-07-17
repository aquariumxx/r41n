const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "textarabic",
  aliases: ["textArabic"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = ["هيه حظوظ والطيب يرد خسران من ذيچ الاحلام الچان بانيها","إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك ","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده ","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت ","ما خربتني وياك غير اليكولون","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل","هي مسؤولية من تحبلك انسان "];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('<a:emoji_3:865956590484848640>').then(r => {
				message.react('<a:emoji_2:865956568738693172>');
           });
          });
      }
}
