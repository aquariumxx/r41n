const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "boy",
  aliases: ["Boy"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = [
      "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
      "https://cdn.discordapp.com/attachments/806591479677321246/827053056864419850/image1.gif",
      "https://cdn.discordapp.com/attachments/806591479677321246/824901137375297596/18.gif",
      "https://cdn.discordapp.com/attachments/806591479677321246/822479012185505832/image0.gif",
      "https://cdn.discordapp.com/attachments/806591479677321246/822478959760375828/image0.gif",
      "https://cdn.discordapp.com/attachments/806591479677321246/820956532808089620/image0.gif",
      "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
      "https://cdn.discordapp.com/attachments/810651927334748180/810651982611742750/image0.gif",
      "https://cdn.discordapp.com/attachments/630159060162838568/804791175729905764/641c084d12619535.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/806879646956257290/a_6b252acb2f2bcf57dfb4747ecdd768a7.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/807013802733862942/aaaaaaaa.gif",
      "https://cdn.discordapp.com/attachments/694693923486171177/800432438223437874/hit_gif_42.gif",
      "https://cdn.discordapp.com/attachments/737803513052266622/798100644471898152/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/833757795055566889/image0.gif",
      "https://cdn.discordapp.com/attachments/742107775475253259/832424242859081748/image1.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833988792913887232/lyng_falna_filan_gif.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833988635992784916/image3-3.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833988515054223380/1gif5.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833982700875939880/a_7d8733c42cbbc774da11edf92089cf12.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833980821177106442/a_00763ffb06320132368f2abe116527ab.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833940802568454204/75.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833939244354633748/image0_2.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833816711357923368/Alkolik_Hayalet_74.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833792144765354005/JanTeL_4.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833757805211156500/ronesa_man_gif_2.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833702031747317800/15-1.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833701966566653962/02.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833701421487882260/6bbcdf2269a577932647febbaa46e6e5.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833700583725989928/12321.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833695252695089172/a_0ef2b749b8ab3dd543d8899b29750ed5.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833682771993559040/gif_1.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833676740697128970/aybala127.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833672337672896564/3d7ae23fdb8ab545427fa7c246cab645.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833668811604492288/43.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833668802063237160/44.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622997842526278/image0-1.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622977123450910/image.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622974740693012/danyakruz_9.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622951672545290/Eda65.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622931678560286/4d7b3f2d15c66eaa5e05977a7d832733.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833622929895325706/Vesly_7.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833621308134260736/a_a0dd8e8af3678f920c00c7940df9f9ef.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833621296695869520/a_7e9dca2b21f9fa706cea87299734f42e.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610337822834728/Zenard_94.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610319695708170/Zenard_58.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610296181915738/passenger_19.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610206042128414/image6.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610216771551252/image8.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610220327534622/legion_gif_49-1.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833610165668413470/image0.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833609968464035850/erkeks_65.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833609895232143420/erkeks_12.gif",
      "https://cdn.discordapp.com/attachments/608711476219478045/833609785886769202/a_35986c612750900a1bbab91f41448a43.gif"
];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Gif")
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
