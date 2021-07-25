const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "girl",
  aliases: ["Girl"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [
      "https://cdn.discordapp.com/attachments/608711473652563968/830788035221782558/1-28.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830789683994820608/a_f173b0560e24959c0ac615948fff0428.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830788112267345920/1-29.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830788165534220308/1-30.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830791687264796682/1-7.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830791908049158154/gif-18.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830787973166399539/1-36.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830788023028547614/1-27.gif",
      "https://cdn.discordapp.com/attachments/608711473652563968/830791979281022986/kjhgfghjkl.gif",
      "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif",
      "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif",
      "https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif",
      "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif",
      "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801769423602057286/239.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800859929871253584/gif2294.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801933521139531846/received_235006021413313.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800852457621422080/image3.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801935138866331648/1282579cc2b6456322f9954a71bad773.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801822372885037066/379.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800852701654417468/image4.gif",
      "https://media.discordapp.net/attachments/687763784902770691/802943076841685002/a_ec53b39696d290c29525e63937a54753.gif",
      "https://media.discordapp.net/attachments/711468868924604537/802218051399319561/a_bd64995f97106974f1521805c8729f50.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800850947181510666/girl10-4-1.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800852457914892308/image0.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800849524448690186/image0.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800852700647522304/image7.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800849524708605983/kokokoko.gif",
      "https://cdn.discordapp.com/attachments/787757651752779826/800850647737565204/image0.gif",
      "https://media.discordapp.net/attachments/711466145764343899/803297206466904095/a_6668c6cb37bdee73dc4129ba6de95aad.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801773930326392862/a_5a14cc0370da659981c90e698f3e7602.gif",
      "https://media.discordapp.net/attachments/711468868924604537/801765536508674078/idlgif78.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834079908556701716/image3.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834079908035952660/image2.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834079907516645436/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834079907000614962/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834079857419485204/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834078196462125136/image3.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/834074306823585802/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/833937816751702036/image3.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/833937806639628298/image1.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/832106696469512232/image0-25.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/832106695677313054/image0-23.gif",
      "https://cdn.discordapp.com/attachments/757298003823427745/777462258510331934/a_702f87a38a181170e63d84348685f82f.gif",
      "https://cdn.discordapp.com/attachments/757298003823427745/775307152297558026/image2-1.gif",
      "https://cdn.discordapp.com/attachments/757298003823427745/775307149890682920/image1-1.gif",
      "https://cdn.discordapp.com/attachments/757298003823427745/775307149688438824/image0-5.gif",
      "https://cdn.discordapp.com/attachments/757298003823427745/775307116369674260/image2-2.gif",
      "https://media.discordapp.net/attachments/694694493525377035/737301813912666145/gif_342.gif",
      "https://media.discordapp.net/attachments/694694493525377035/737301916379381790/gif_335.gif",
      "https://media.discordapp.net/attachments/694694493525377035/737021018333249546/Lorie10.gif"
];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Girl Gif")
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
