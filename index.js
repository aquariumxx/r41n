const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('ODA2ODQwMjEyNjA4OTA5MzQ0.YBvSgQ.QFXtFA0oRdASQ8EtpHg2ls9dk2s');
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH
client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      

    client.user.setActivity(`${PREFIX}help Reyna Is One`, { type: "LISTENING"});

    client.user.setActivity(`${client.guilds.cache.size} Server,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "LISTENING"});
   
  
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("#FF0000").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 
  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(saymsg)
    .setFooter("Reyna", client.user.displayAvatarURL())
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }

//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor("About Reyna Bot.", "https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=1024")
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=1024`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

[Support](https://discord.gg/jcs4XwcExv) - [Invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)

**Developers Bot** :
<@790233637580832788>

**Set Status** :
Online

**Time Create** :
4/2/2021

**Prefix Bot** :
.

`)

    //send the Message
    message.channel.send(embed)
   message.react("<:emoji_4:815583574983966720>")
  } 


//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription (`
    Links

[Support](https://discord.gg/jcs4XwcExv)
-
[Invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot)`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(``)
    .setTitle(`**Support Reyna**`) 
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/bf2d9853ffc2b48775c0cf9f8932a189.png?size=1024`)
    .setTimestamp()
    
    //send the Message
    message.channel.send(embed)
   message.react("<:emoji_4:815583574983966720>")
  } 

//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("#FF0000")
      .setTitle(`<:emoji_4:815583574983966720> \`Please wait ${timeLeft.toFixed(1)} seconds before reusing the ${prefix}${command.name}\`!`)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("#FF0000")
   .setTitle(`<:emoji_4:815583574983966720> There was an error executing that command.`)).catch(console.error);
 }


});

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("829667175568113664");
  let embed = new MessageEmbed().setColor("#FF0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✅ Join Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("829673571722068009");
  let embed = new MessageEmbed()
  .setColor("#FF0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let man = [
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
      "https://cdn.discordapp.com/attachments/757298003823427745/775307116369674260/image2-2.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `**Gif Girl**`,
          footer: `Requested by ${message.author.username}`,
          color: `#FF0000`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })

.catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
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
      "https://cdn.discordapp.com/attachments/737803513052266622/798100644471898152/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `**Gif Boy**`,
          footer: `Requested by ${message.author.username}`,
          color: `#FF0000`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })

.catch(e => {
        client.log.error(e);
      });
  }
});

function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}

//Bot coded by Tomato#6966 
