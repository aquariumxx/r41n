const fs = require("fs");
const Discord = require("discord.js");
  module.exports = {
  name: "textArabic",
  aliases: ["ta","textArabic","textarabic","text-arabic"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args) => {

let replies = ["هيه حظوظ والطيب يرد خسران من ذيچ الاحلام الچان بانيها:herb:","إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك :broken_heart: :exclamation:","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده :wilted_rose:","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت :wilted_rose:","ما خربتني وياك غير اليكولون:wilted_rose:","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل:wilted_rose:","هي مسؤولية من تحبلك انسان :broken_heart: "];

let result = Math.floor((Math.random() * replies.length));


message.channel.send(replies[result]).then(message => {
			message.react('<a:emoji_91:842129244343369808>').then(r => {
				message.react('<a:emoji_94:842141553262460968>');
           });
          });
      }
}
