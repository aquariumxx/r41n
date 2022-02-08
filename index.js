const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('OTEyODQ0ODI1MDU1ODU0NjIz.YZ12_g.JgPS20StId47lNDkbu2mPglMvh0');
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
      

    client.user.setActivity(`,help | ${client.guilds.cache.size} Guilds - ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users`, { type: "WATCHING"});

    
   
  
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
    message.reply(new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription("")
    .setTitle(`Hey, My Current Prefix is ,

`));
  } 
  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }

///////////////////////
client.on("guildCreate" , Wolf => {
  if(Wolf.memberCount < 200 ){
    console.log(`  name ( ${Wolf.name} ) zhmaray memberakan ( ${Wolf.memberCount}) created by Wolf`)//by Wolf
    Wolf.leave();
  }
})

//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription (`
[Invite](https://discord.com/api/oauth2/authorize?client_id=912844825055854623&permissions=8&scope=bot)
[Support](https://discord.gg/UybeVq66hF)`)
    .setTitle(``) 
    .setAuthor("Emily ✨","https://cdn.discordapp.com/avatars/912844825055854623/84ac4c7425a16a0e7b32cd6076dc3e83.png?size=1024","https://discord.gg/UybeVq66hF")
    
    //send the Message
    message.channel.send(embed)
   message.react("<:emoji_4:815583574983966720>")
  } 

//An code announcement for everyone but no one knows so fine ^w^
if(message.content.startsWith(`${prefix}vote`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:emoji_4:815583574983966720>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Bot`)
    .setTitle(``)
    .setDescription("\`Vote Link\` Link Vote")
    .setFooter(`Thank you for vote`)
    .setColor("#FF0000")
    //send the Message
    message.channel.send(embed)
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
      .setTitle(`Please wait For ${timeLeft.toFixed(1)} Seconds!`)    
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
   .setTitle(`Unavaible Command please type ,help to see all commands`)).catch(console.error);
 }


});

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("938849731533234296");
  let embed = new MessageEmbed().setColor("#00FF09")
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
  let channel = client.channels.cache.get("938849768707342416");
  let embed = new MessageEmbed()
  .setColor("#FF0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .addField(" **Verification Level**", `${guild.verificationLevel}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});
/////
var anime = ["https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif","https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif","https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif","https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif","https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif","https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif","https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif","https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif","https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif","https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif","https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif","https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif","https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif"];
client.on("message", async message => {
if (message.content === `,anime`) {
	    if (message.author.bot) return;
   if (!message.channel.guild)
      return message.reply();
  message.channel.send({
    embed: {
      description: `Anime Gif`,
		  color: `#0000ff`,
      image: {
        url: anime[Math.floor(Math.random() * anime.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
//////
var aaaa = ["https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"];
client.on("message", async message => {
if (message.content === `,animal`) {
	    if (message.author.bot) return;
   if (!message.channel.guild)
      return message.reply();
  message.channel.send({
    embed: {
      description: `Animal Gif`,
		  color: `#0000ff`,
      image: {
        url: aaaa[Math.floor(Math.random() * aaaa.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
///////
var boy = ["https://images-ext-1.discordapp.net/external/LbwpelDmQ2wPLaZRjTDKaPTUK1lPPHDWeCmkNRxVJ90/https/media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif","https://images-ext-2.discordapp.net/external/w_LTPMl7KqwpL0DYt3xMBaIzrpUSeN_7yYnCoMpmfzE/https/media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif","https://media.discordapp.net/attachments/742107775475253259/750710019087007794/image1.gif","https://media.discordapp.net/attachments/608711476219478045/806936322069102622/a_e96dcdaa0567284a4741ea420a4dc663.gif","https://images-ext-1.discordapp.net/external/aJo5-djp7aHGyr-UULHmZX6RpEb163kJ3NVryqAvYsg/https/media.discordapp.net/attachments/756254155831509158/802289132931383296/image0.gif","https://media.discordapp.net/attachments/721044386217197699/797834912433963028/weiqs_3.gif","https://media.discordapp.net/attachments/721044386217197699/801448039427997746/man_21.gif","https://images-ext-2.discordapp.net/external/WXSWW8ThjRg7ZqS6g9nqc0OLMpoQq5aEO6yatGWMJGs/https/media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif","https://media.discordapp.net/attachments/694693923486171177/800432438223437874/hit_gif_42.gif","https://images-ext-1.discordapp.net/external/NH3GYgFHCrPHyXQ_rmTUqdxnEgjbZdAjJmAsPzi3PBo/https/media.discordapp.net/attachments/711468906451304449/802472177462673428/image0_2.gif","https://media.discordapp.net/attachments/608711476219478045/806879646956257290/a_6b252acb2f2bcf57dfb4747ecdd768a7.gif","https://images-ext-1.discordapp.net/external/0btjC-DUYe7bKnbjl7gqjJcXM1Vg7JNfeOctJtKxMU0/https/media.discordapp.net/attachments/687763784902770691/802851176302903336/a_5ace3acf503e5a7a493344eed271e21f.gif","https://media.discordapp.net/attachments/694693923486171177/800128975707701288/a_c88293fb975e08dcf940d75655a709ed.gif","https://media.discordapp.net/attachments/737803513052266622/799650053358747658/image0.gif","https://media.discordapp.net/attachments/737803513052266622/798100461801963534/image0.gif","https://media.discordapp.net/attachments/737803513052266622/799651519728451604/image0.gif","https://media.discordapp.net/attachments/737803513052266622/799651519728451604/image0.gif","https://images-ext-1.discordapp.net/external/PN8l3vqIk1wJOd1DFp7r5dI4LHtd9yVXgi1lW2JlPHQ/https/media.discordapp.net/attachments/687763784902770691/802851374073118750/a_d476bf43667abaf377470c36d2329b15.gif","https://media.discordapp.net/attachments/737803513052266622/798100644471898152/image0.gif","https://images-ext-2.discordapp.net/external/UIH-BscQAOLF0_iog9r78yDW8BGJzYSgmCfYkl58cbI/https/media.discordapp.net/attachments/711468906451304449/802472898911797278/113.gif","https://images-ext-2.discordapp.net/external/KI77fYgjwvpzu9SmAzOG5lxMtuYg_s_n6C2GV3fS9wE/https/media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif","https://images-ext-1.discordapp.net/external/HpSNeVjps7wCu_RTWIusHbSEmK1nCmfcGujlGLKxMzs/https/media.discordapp.net/attachments/687763784902770691/802691373501251594/a_aa30aac3dbd5ff455266860294da6b08.gif"];
client.on("message", async message => {
if (message.content === `,boy`) {
	    if (message.author.bot) return;
   if (!message.channel.guild)
      return message.reply();
  message.channel.send({
    embed: {
      description: `Boy Gif`,
		  color: `#0000ff`,
      image: {
        url: boy[Math.floor(Math.random() * boy.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
///////
var girl = ["https://media.discordapp.net/attachments/742107775475253259/820847198630838302/image0.gif","https://media.discordapp.net/attachments/742107775475253259/818633361819435069/image0.gif","https://media.discordapp.net/attachments/787757651752779826/800851572677672960/image0-7.gif","https://images-ext-1.discordapp.net/external/es2uReKk1iYgBEIP-Xe9Y3lg-cs_GoMHAmdecfUwp6g/https/media.discordapp.net/attachments/687763784902770691/802739443278413895/a_aa9109603174f8dd3b0a124cddce1a7b.gif","https://images-ext-1.discordapp.net/external/3h8MvKR2nIN8leQteZg319Eku6OAldTojzTAGkzehPQ/https/media.discordapp.net/attachments/687763784902770691/802943911517356053/a_521d3a12cbda3268bedbb7c27d91fe37.gif","https://media.discordapp.net/attachments/742107775475253259/820488143857647677/image4.gif","https://media.discordapp.net/attachments/742107775475253259/818627946821976084/image1.gif","https://media.discordapp.net/attachments/742107775475253259/766092297049473054/image6.gif","https://media.discordapp.net/attachments/742107775475253259/821167011785605130/image0.gif","https://images-ext-1.discordapp.net/external/_w7dXYt6Iv0lnc_J5Ad6jmy2pDZKQLnyk_qc08BSABw/https/media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif","https://images-ext-1.discordapp.net/external/XWs0Kc50FPr4YcT941l91X4i6Tgw2cYIEZnc3WrgVPc/https/media.discordapp.net/attachments/711468868924604537/801935138866331648/1282579cc2b6456322f9954a71bad773.gif","https://images-ext-1.discordapp.net/external/Da6ZwoBscxvcTSV-0Shc6jsAwEcCowxrGT-jL1bdCFA/https/media.discordapp.net/attachments/694695166895849562/796445341045620776/20210106_212054.gif","https://media.discordapp.net/attachments/742107775475253259/818627963863302154/image0.gif","https://images-ext-2.discordapp.net/external/831_ol2wWVvX1n378qkmkQxAJoUVmnDbOgm-O3nktzo/https/media.discordapp.net/attachments/711466145764343899/803298402498117638/a_99da7a830c2e4a2e09705e9d15d70436.gif","https://media.discordapp.net/attachments/742107775475253259/751034233539133460/image2.gif","https://media.discordapp.net/attachments/742107775475253259/820847205291524137/image1.gif","https://images-ext-2.discordapp.net/external/LtT3c1yt9Q8oN1oczXu1PFmpyyhiVGse3UiZOzeDV2s/https/media.discordapp.net/attachments/711466145764343899/803293353549496350/a_e849d11bf3605c4f29baec1df458ee9f.gif","https://media.discordapp.net/attachments/820811352087330828/820954931610910720/image4.gif","https://images-ext-1.discordapp.net/external/L9FRIsxaF2DmB7yi60XugG90Kf-CqQ0ec74CtXqhSgo/https/media.discordapp.net/attachments/687763784902770691/802918910206541824/a_d1aaa887c58b17f8debf2d502213b633.gif","https://media.discordapp.net/attachments/742107775475253259/818630958214283294/image0.gif","https://media.discordapp.net/attachments/742107775475253259/821413314068348988/image0.gif","https://media.discordapp.net/attachments/787757651752779826/800853272482938900/image9.gif"];
client.on("message", async message => {
if (message.content === `,girl`) {
	    if (message.author.bot) return;
   if (!message.channel.guild)
      return message.reply();
  message.channel.send({
    embed: {
      description: `Girl Gif`,
		  color: `#0000ff`,
      image: {
        url: girl[Math.floor(Math.random() * girl.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
///////
var couple = ["https://media.discordapp.net/attachments/694694675679936585/800489743183904810/a_8d1f2e7282347d977a3bd1e0b58b7c20-1.gif","https://images-ext-2.discordapp.net/external/XNfBHzKy7buK63kTXnhneedCZesXjDt4YzXc4aHRyP0/https/media.discordapp.net/attachments/711465242798063706/800617858567634973/image0.gif","https://media.discordapp.net/attachments/694694675679936585/801400692920287252/Enes_Acar_GIF_107.gif","https://media.discordapp.net/attachments/737807251825360977/799658067687637022/image0.gif","https://media.discordapp.net/attachments/787757651752779826/800871282342101053/image2.gif","https://media.discordapp.net/attachments/737807251825360977/805157325647904788/image3.gif","https://media.discordapp.net/attachments/672961356412092416/810960039149305866/a_d8fe322eef2273c659378db6f05023a8.gif","https://media.discordapp.net/attachments/787757651752779826/800874241930297384/image1.gif","https://media.discordapp.net/attachments/694694675679936585/801547963507802112/a_56138fd67f8998f8a1e77747e6d82541.gif","https://media.discordapp.net/attachments/694694675679936585/801547053276200960/a_5868306505ffa5f49799a0311aa68abd.gif","https://media.discordapp.net/attachments/787757651752779826/800874581748875274/image4.gif","https://media.discordapp.net/attachments/694694675679936585/801400823464329236/a_701430cde82e08312c2d1544ab6b5782.gif","https://media.discordapp.net/attachments/787757651752779826/800870670786625586/image4.gif","https://media.discordapp.net/attachments/694694675679936585/800542408604516383/17802afc858cd76c8ab1769025ff4cc0.gif","https://media.discordapp.net/attachments/672961356412092416/809899258290372708/ezgif-4-26f9f6d90b7c.gif","https://media.discordapp.net/attachments/694694675679936585/814521729048379432/EB5BFE2A-0ACE-4675-AE97-17705DD8CAC9.gif","https://media.discordapp.net/attachments/737807251825360977/809513888051232812/image0.gif","https://images-ext-1.discordapp.net/external/zIf3RfN3-RxsvQyPTj8TVeTHefG8InxLGW77azec5XQ/https/media.discordapp.net/attachments/711465242798063706/801762738522685440/a_07530fffa37384ab4766ac78c4539108.gif","https://media.discordapp.net/attachments/694694675679936585/801548135519617044/115.gif","https://media.discordapp.net/attachments/694694675679936585/812828196961517569/image0-20.gif","https://media.discordapp.net/attachments/737807251825360977/805157436281454672/image2.gif","https://images-ext-1.discordapp.net/external/zIf3RfN3-RxsvQyPTj8TVeTHefG8InxLGW77azec5XQ/https/media.discordapp.net/attachments/711465242798063706/801762738522685440/a_07530fffa37384ab4766ac78c4539108.gif"];
client.on("message", async message => {
if (message.content === `,couple`) {
	    if (message.author.bot) return;
   if (!message.channel.guild)
      return message.reply();
  message.channel.send({
    embed: {
      description: `Couple Gif`,
		  color: `#0000ff`,
      image: {
        url: couple[Math.floor(Math.random() * couple.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
//////
var pboy = ["https://media.discordapp.net/attachments/752914781941268563/825347506912755722/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/802038865832837151/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/770010851364306984/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/793394349676953600/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/782242896862380102/cb15548a4f3e47190aebafe2b35728cc.jpg","https://media.discordapp.net/attachments/737803397314510849/803985248534790164/image9.png","https://media.discordapp.net/attachments/752914781941268563/825347159624908810/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/814868415927681024/1bbf3f52e2fdebcb8bdc3c78b0199d7f.jpg","https://media.discordapp.net/attachments/737803397314510849/783265044095565834/008e1740a1df2347ed0e0661e5b34f88.jpg","https://media.discordapp.net/attachments/737803397314510849/793394316495552542/image0.jpg","https://media.discordapp.net/attachments/694694407278034944/815864151703683072/ba2ef6925d984790baa67a118f85b6cd.png","https://media.discordapp.net/attachments/737803397314510849/770010877197680670/image0.jpg","https://media.discordapp.net/attachments/737803397314510849/803984953422905354/image9.png","https://media.discordapp.net/attachments/737803397314510849/773938277199773696/image3.jpg","https://media.discordapp.net/attachments/752914781941268563/825347924799782962/image0.jpg","https://media.discordapp.net/attachments/694694407278034944/815996273584635904/epp6.png","https://media.discordapp.net/attachments/737803397314510849/803985247430770768/image8.png","https://media.discordapp.net/attachments/737803397314510849/793778903151018004/f9732e837eaba0e2c4de106989b86366.jpg","https://media.discordapp.net/attachments/694694407278034944/815995959845716028/Lucent_6.jpg","https://media.discordapp.net/attachments/737803397314510849/798112354227191828/image1.jpg","https://media.discordapp.net/attachments/737803397314510849/798112373508407316/image5.jpg","https://media.discordapp.net/attachments/737803397314510849/802038566145884180/image5.jpg"];

client.on("message", async message => {

if (message.content === `,pboy`) {

	    if (message.author.bot) return;   if (!message.channel.guild)

      return message.reply();

  message.channel.send({

    embed: {

      description: `Photos Boy`,

		  color: `#0000ff`,

      image: {

        url: pboy[Math.floor(Math.random() * pboy.length)]

      }

    }

  }).catch(e => {

    client.log.error(e);

  })

        }  

});
/////
var pgirl = ["https://media.discordapp.net/attachments/737803070217650227/788522847776669746/image0.jpg","https://media.discordapp.net/attachments/737803070217650227/783977022833426432/1c93ad1afb51db45fe2a02670ca9985a.jpg","https://media.discordapp.net/attachments/737803070217650227/799742349139640330/Image_about_girl_in_pet_by_Xuan_Mai_Nong_on_We_Heart_It.jpg","https://media.discordapp.net/attachments/737803070217650227/802040226251276338/image8.jpg","https://media.discordapp.net/attachments/737803070217650227/807211702843211796/co.jpg","https://media.discordapp.net/attachments/737803070217650227/783002747636023337/122e575abb2263fbc4080b005738e26b.jpg","https://media.discordapp.net/attachments/737803070217650227/794200456213037086/aw58.PNG","https://media.discordapp.net/attachments/737803070217650227/794200478112022528/aw63.PNG","https://media.discordapp.net/attachments/737803070217650227/783653801054830642/59ff51e62283d9e7b6429b451d48c85a.jpg","https://media.discordapp.net/attachments/737803070217650227/794200162837856286/hq2.PNG","https://media.discordapp.net/attachments/737803070217650227/738695511963336715/image4.jpg","https://media.discordapp.net/attachments/737803070217650227/790954414621065226/image7.jpg","https://media.discordapp.net/attachments/737803070217650227/793526362223673434/ky83.PNG","https://media.discordapp.net/attachments/737803070217650227/783653667952787496/008beb180d5975b98697d2c26dd55bbc.jpg","https://media.discordapp.net/attachments/737803070217650227/798111231540985886/image6.jpg","https://media.discordapp.net/attachments/737803070217650227/793740878048133130/ky50.PNG","https://media.discordapp.net/attachments/737803070217650227/794199860483063808/ky18.PNG","https://media.discordapp.net/attachments/737803070217650227/800107746421637150/WE_NEEDS_AMBASSADORS.jpg","https://media.discordapp.net/attachments/737803070217650227/784417968959782952/da456aeeec913d6224d985ff1264df8b.jpg","https://media.discordapp.net/attachments/737803070217650227/802039966220812298/image7.jpg","https://media.discordapp.net/attachments/737803070217650227/738302867705954334/image5.jpg","https://media.discordapp.net/attachments/737803070217650227/740006271398182993/image6.jpg"];

client.on("message", async message => {

if (message.content === `,pgirl`) {

	    if (message.author.bot) return;   if (!message.channel.guild)

      return message.reply();

  message.channel.send({

    embed: {

      description: `Photos Girl`,

		  color: `#0000ff`,

      image: {

        url: pgirl[Math.floor(Math.random() * pgirl.length)]

      }

    }

  }).catch(e => {

    client.log.error(e);

  })

        }  

});
//////
var pcouple = ["https://media.discordapp.net/attachments/764935873526628462/813878405056692264/ilyas.jpg","https://media.discordapp.net/attachments/764935873526628462/802051120594944011/my_half__Vinnie_Hacker.jpg","https://media.discordapp.net/attachments/764935873526628462/793530490102480916/d24.PNG","https://media.discordapp.net/attachments/764935873526628462/803987557398085742/image9.jpg","https://media.discordapp.net/attachments/764935873526628462/813878398170038353/YILDIZLARA_FISILDAMAK_Masal__Meric_2.jpg","https://media.discordapp.net/attachments/764935873526628462/803987577404522506/image0.jpg","https://media.discordapp.net/attachments/764935873526628462/793828273020600320/d78.PNG","https://media.discordapp.net/attachments/764935873526628462/803987604735393832/image0.png","https://media.discordapp.net/attachments/764935873526628462/802041764059676682/image4.jpg","https://media.discordapp.net/attachments/764935873526628462/802051082804527104/Traicion_Y_MentirasJ_H.jpg","https://media.discordapp.net/attachments/764935873526628462/803987579208335380/image9.jpg","https://media.discordapp.net/attachments/764935873526628462/803987955491405844/image1.png","https://media.discordapp.net/attachments/764935873526628462/802041555355172864/image6.jpg","https://media.discordapp.net/attachments/764935873526628462/813878465950122004/Chionophile___Texting.jpg","https://media.discordapp.net/attachments/764935873526628462/799746699949375508/k__on_Twitter.png","https://media.discordapp.net/attachments/764935873526628462/803987535012823090/image1.jpg","https://media.discordapp.net/attachments/764935873526628462/793396245968060416/image0.jpg","https://media.discordapp.net/attachments/764935873526628462/793396300925632532/image0.jpg","https://media.discordapp.net/attachments/764935873526628462/803987577958695022/image3.jpg","https://media.discordapp.net/attachments/764935873526628462/813878489613729872/beyza.jpg","https://media.discordapp.net/attachments/764935873526628462/803987534752251979/image0.jpg","https://media.discordapp.net/attachments/764935873526628462/803987534752251979/image0.jpg"];

client.on("message", async message => {

if (message.content === `,pcouple`) {

	    if (message.author.bot) return;   if (!message.channel.guild)

      return message.reply();

  message.channel.send({

    embed: {

      description: `Couple Photos`,

		  color: `#0000ff`,

      image: {

        url: pcouple[Math.floor(Math.random() * pcouple.length)]

      }

    }

  }).catch(e => {

    client.log.error(e);

  })

        }  

});
/////
var panime = ["https://media.discordapp.net/attachments/737803691565907991/814870901869903943/10a362dcc2b500b38b7a18c0f8e56633.jpg","https://media.discordapp.net/attachments/737803691565907991/814870828175982612/f4aa26706331dd3aea529aaa699e065b.jpg","https://media.discordapp.net/attachments/737803691565907991/811250516138393610/image3.jpg","https://media.discordapp.net/attachments/737803691565907991/799748847310995496/Image_about_cute_in_s_by_moonlxght_on_We_Heart_It.jpg","https://media.discordapp.net/attachments/737803691565907991/814871897736478740/ebeaa0e2ad4ac6dcaf6ad37d4f1176e9.jpg","https://media.discordapp.net/attachments/737803691565907991/805865557533786182/image0.jpg","https://media.discordapp.net/attachments/737803691565907991/805865899697242162/image0.jpg","https://media.discordapp.net/attachments/737803691565907991/804092905035005982/mary_saotome_icons.jpg","https://media.discordapp.net/attachments/737803691565907991/814871936298647652/b0ad93886ac4f82a390a2c36e6c79b77.jpg","https://media.discordapp.net/attachments/737803691565907991/814870785515585617/79fe40c356381b4ab6417b40a14a5572.jpg","https://media.discordapp.net/attachments/737803691565907991/791941887258001428/image0.jpg","https://media.discordapp.net/attachments/737803691565907991/805865906247958588/image0.jpg","https://media.discordapp.net/attachments/737803691565907991/799748830282514462/SAO___Tumblr.png","https://media.discordapp.net/attachments/737803691565907991/805865554140856320/image0.jpg","https://media.discordapp.net/attachments/737803691565907991/799748825152749588/Image_about_two_in_anime_by_oosh_on_We_Heart_It.jpg","https://media.discordapp.net/attachments/737803691565907991/814870981378048060/b6c9cc93d77714096754e988064d3dee.jpg","https://media.discordapp.net/attachments/737803691565907991/814870757804212254/d713f526d6321219d36cec52462700f0.jpg","https://media.discordapp.net/attachments/737803691565907991/813879571455803412/icons.jpg","https://media.discordapp.net/attachments/737803691565907991/810183657021112320/image1.jpg","https://media.discordapp.net/attachments/737803691565907991/814870858085826590/b0e822286bbce6b0bb6f1dc05ba1b8c8.jpg","https://media.discordapp.net/attachments/737803691565907991/814871214958444565/acad814ed5dc4019db7b88ffac0c5397.jpg","https://media.discordapp.net/attachments/737803691565907991/810183656743895090/image0.jpg"];

client.on("message", async message => {

if (message.content === `,panime`) {

	    if (message.author.bot) return;   if (!message.channel.guild)

      return message.reply();

  message.channel.send({

    embed: {

      description: `Anime Photos`,

		  color: `#0000ff`,

      image: {

        url: panime[Math.floor(Math.random() * panime.length)]

      }

    }

  }).catch(e => {

    client.log.error(e);

  })

        }  

});
//////
client.on("message", msg => {
    var args = msg.content.split(" ");
    var command = args[0];
    var emojisname = args[1];
    var emojislink = args[2];
    if (command === PREFIX + "addemoji") {
        if (!msg.guild){
            return msg.channel.send("Only SERVER Commands");
        }
        if (!msg.guild.member(client.user).hasPermission("MANAGE_EMOJIS")){
            return msg.channel.send("I Don't Have this permission `MANAGE_EMOJIS`");
        }
        if(!msg.guild.member(msg.author).hasPermission("MANAGE_EMOJIS")) {
            return msg.channel.send("You Don't Have this permission `MANAGE_EMOJIS`");
        }
        if(!emojisname){
            return msg.channel.send("Please include the name emoji");
        }
        if (!emojislink){
            return msg.channel.send("Please include the emoji link");
        }
        msg.guild.emojis.create(emojislink, emojisname).then(emoji =>{
            msg.channel.send("Emoji Created . <:"+emoji.name+":"+emoji.id+">")
        }).catch(err => msg.channel.send("The size of the image should be less than `256` kilobytes"));
    }

});
///////
client.on("message", msg => {

  if (

    msg.content == prefix + "textkurdish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = ["بـمرێ ئـەو دڵەیی تەنھا بـەناو ھێنانت پڕ دەبێ","ڕەنگە ھیچ کات خۆشیان نەویستبین ڕەنگە تەنھا برینەکانی خۆیان بە ئێمە چاک کردبێتەوە ..",

"ئەبم بە خەون بۆ ھەمووان و خەو بە کەسەوە نابینم","هیچ شتێک ڕاست نیە جگە لەو نامایەی دەیسڕیەوە پێش ئەوەی  بینێری ..",

"جێت ناهێڵم، تەنها دوور ئەکەومەوە!",

"بە هەموو ئاقڵتەوە وا ئەزانی گرینگی لام، گوڵم ئەو زەمانە گوزەشت کە جێت هەبوو لە دڵم",

	     "پشتـم لە دونیا کرد روی نەبوو تا رووی تێکـەم لەناو خۆما گۆرێکم ھەلـکەند بۆ ھەموو ئومێدەکان تا ھەمیشە رووناك بمــے",	     "ئــمڕۆ خــۆشترین پێـکەنی دنیا دڵــخۆشم نـاکات",

	     "دڵــخۆش بوون  بەپارە بێ زور بەی کەس دەتـوانی بیکڕێ بەڵام  داخـەکەم بەخـۆشـەویستیەکی پـاکـە",

	     "بەپێی دواین لێکۆڵینەوە کە خۆم کردومە، ئەو کوڕانەی کە ئیمۆجی زۆر بەکاردێنن، ئەندامی پەلکەزێڕینەن",

	     "خۆت خۆشبوێت تا ھەمووان ناچار بکەی نازی ھەبوونت بکێشن",

	     "تاکۆتایی تەمەن بە تەنیا بمێنیتەوە، باشترە لەوەی شەو ڕۆژ لەگەڵ کەسێك بیت کە هیچ هەستێکی نەبێ بۆت",

	     "لەناو هەموو برینەڪانی ژیانما تۆ ئەو برینەی بەمردن لەبیر ئەچیتەوە!",

	     "من ئەھلی منەت کێشان نیم دەمێنیتەوە باشە نامێنیتەوە باشتر",

	     "وەک ئەوەی دروست بووبم بۆئەوەی هەموو ئەو شتانەی خۆشم دەویست لەدەستی بدەم",

	     "تە‌مە‌نێك لە‌ ناو دڵم ھە‌ڵت دە‌گرم بە‌ بێ ماندوو بون",

"هیـوام وایــە جـەژنـی ئـێـوە خــۆش بـــێـــت",

	     "بەڵام ئەوەش گوناهێکی گەورەیە مرۆڤ خۆشبەخت نەبێت.",

	     "گریانم یەت بۆ ئەو وێنانەیی پێش ناسینی تۆ تیایدا پێکەنیووم",

	     "خـۆشـمـەوێـی'وە بـەڵـێـن بـێ خـۆمـان بـپـارێـزم",

	     "هۆگربوونم بە تۆجوانترین روداوی ژیانم",

	     "ئەژیم بەدڵێکی مردوو کەهیچ کەس بەرگەی وێران بونەکەم ناگرێت",

	     "ئەوانەی لە دونیا لەیەکتر توڕە دەبن لە قیامەت ڕوبەڕوی یەکتر دەکرێنەوە من لێت خۆشدەبم بۆ ئەوەی لە قیامەتش نەوبینمەوە... !",

	     "دەمەوێ بگەڕێمەوەئەو کاتەی کە مانای خواحافیزی تا بەیانی بوو",

	     "تــیــری دۆســتــەکــانــم نــەبــا دوژمن هــێــزی مــنــی نــەدەبــو",

	     "هەموو خەڵک لە خۆم دوور ئەخەمەوە ‏لەبەر ئەوەی تۆ نین ، وە هەرگیز ناتوانن ببن بە تۆ",

	     "گرینگ نیه‌ له‌ هه‌ر كوێیه‌ك بی ,چه‌نێك دوور بی ,تۆ'م بۆ هه‌میشه‌ له‌ دڵمدا هه‌ڵگرتوه‌",

	     "مانـگ بـە بـۆنـەی ئـەستـێـرەکـانـەوەدەژیــت منـیـش بـە بـۆنـەی تـۆ",

	     "بــۆ هـەمیشـە وەک نهێنیەکی جوان لە دڵما دەمێنیتەوە",

	     "لێیان حەرام بێت گرتنی دەستەکانت ",

	     "مڕوڤەكان بە چاوەروانی تاقی مەكەنەوە چاوەروانی مڕوڤەكان ئەگۆرێ",

	     "!...لەگەڵ تەنیایی راهاتووم عادەتم پی کردوە .بەڵام هەنێک جار زۆر حەزم لیە ئەزیزی دڵی کەسێک بم ",

	     "خراپ بووی ...!بەڵام هەر ئەویشە باش بوو ",

	     "خەمبار مەبە ئەوەتەنها ڕۆژێکی خراپە نەک ژیانێکی خراپ",

	     "بيرت ئه كه م به لام ئه وه نده به سه كه باشيت وبيوست به من نيه",

"دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!",

"ھۆگری کەس مەبن لێرە مرۆڤەکان ناگەن بە یەکتری تەنھا دەبنـە خاوەنی دڵی یەکتری :)...",

"کاتێک شتێک ڕاستەقینە بێت بۆ هەمیشە دەمێنێتەوە","وەفـا لـە ئەخلاق دای جـوانیش  لە ناخدایـە.!","گـیانـی منـە ھێـشـتا گـەرچـی دڵـی دا بە کـەسێکی دی","بۆت دوبارە نابمەوە ئەمە بەڵێنە","بۆ کەسانێک دەنوسین کە گرینگ نین لایان","درەنگ تر دەمرن ئەوانەی کەسێک خۆشی دەوێن","ژیان وەک دەریایەکی بێ ئاوە:)","لـە من غافل مەبـە ، کە من بـۆ تـۆ لە جیھـان غافلم...","لەگەڵ تۆ بـوون تەنھا لە من دێ","گـوێ بـۆ هــەمــوو کــەسـیــک بــگـرە بــەڵام قـســە بــۆ هــەمـوو کــەس مـەکــە...","جێت ناهێڵم، تەنها دوور ئەکەومەوە!","خـەڵک بۆ یەکتری وتـۆش بۆ من","ئەمجارە ماڵئاوای ناکەم دڵت ئەبێ وردە وردە ھەست بە نەبوونیم بکات","دەستم دەست نییە شوێنی بینینی ئازاردانەکانی تۆیە","چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە","میھرەبان بن ڕۆژێک دێ ھەرگیز یەکتری نابینەوە","دڵم بۆ باوەشێك تەنگە كە كەسێكى تر تيایدا ئارامە..","لە دڵی ھەموو ماندا مرۆڤێک ھەیە ھەرگیز نامرێ ئەگەر بوونیشی نەمابێ","لێم زویر مەبە ھەر تۆم ھەیە شەڕی پێ بفرۆشم","خۆزگە ئەو توانایەم ھەبوایە بمتوانیایە پێت بڵێم خۆت داپۆشە نەوەك سەرمات بێت","بەڵێنێکی بچوکت پێ دەدەم ڕۆژێک لە ھەموو کەسێکدا دەگەڕێی بۆ منێکی تر بەڵام نای دۆزیەوە","ئەگەر ئەو ئاشقت بایە جگە لەتۆ دڵی نەدەدا بەکەسێکی تر!.", "چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە", "دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!", "شـەو وەرە خـەونـم دڵـم بـۆت تـەنـگ بـووە..)!", "تۆ لە کۆتای نامەی خۆ کوشتن ئەچی", "من یارو پەرستارو ھاوسەفەرت بۆ کێم دەڕەنجێنی", "نـەمـزانـۍ ڕۆژێـــڪٮ دێـــت..لـــەپــــۆســتەکــــانم بــــاسی نەبونـــیت بــــڪـەم"];

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
///////
client.on("message", msg => {

  if (

    msg.content == prefix + "textturkish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","Ben o gözlerini dünyalara vermem ki kardeşim",

"Geceler yıldızlara ben sana muhtacım, unutma .","şimdi ! Bıçağın üstüne gidip şarkı söylerim Ölüm bile seni sevdiğimi biliyor ..",

"Yaşamak Istediğim Dünya Sensin","büyüdüm anne şimdi senden habersiz ağlıyorum...",

"Gözlerindeyim ben hala bir yere düşmedim..","Sen gel bide geceleri bana sor özlemek inan yaşamaktan daha zor..zap️",

"Yanakları annemin yemeklerinden daha lezzetli Ancak çok uzakta","Bitmeyen bir sekız yılık hasret..",

"Ben bu kadar çok şey öğrendim ve sen yoksun","Yalancının mumu yatsayıa kadar..",

"İnsanlar incinecek ve mutlu ol diyecekler.","Gözlerindeyim ben hala bir yere düşmedim..",

"Ay dünyaya, ben sana tutulmuşum..","Önle Kolaysa Gel Başimdan , Kaldir At Sevdani",]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
//////
client.on("message", msg => {

  if (

    msg.content == prefix + "textarabic"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"ألا بذكر الله تطمئن القلوب❤","يدرون بينـه شگد نودّهُـم ، مَرمرونة.🌷",

"نجمه وكتلني موادع الليل","💔وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهي🌷",

"مرت چم سنه وبعدك براسي تدگ","صح تنكتب عايش بالسجلات!! بس انت مجرد رقم ينعد",

"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","ولا مكتوب تايه يندل عيوني",

"كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام.","غُرب بعيونهُم صرنـه ونسونـه",

"عندما نفقد الشّیء نجعله ونرسمه خیالاً لا یُوصف، ونعمّم هذا الخیال فی کلّ شیء حتّى یصبح على شکل مسلّماتٍ لا فرار منها.","خلص كل الحچي و انساك بس شنساك..؟",

"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","",

"و تترك حُزنك بين المقاعد، ترجوه يُسرق.. - مظفر النواب","حنّيتلك وادري اليحن.. تثگل عيونه من الحزن",

"عرفتك ما تحن.. من گتلي الله وياك! 🌷","كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام",]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
///////
client.on("message", msg => {

  if (

    msg.content == prefix + "textenglish"

  ) {

    if (msg.author.bot) return;

    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())

 

    var x = [

"best friends are siblings from anoher mother","In order to succeed, your desire for success should be greater than your fear of failure",

"be kind, not only to others, to yourself too!","Inspiration is some mysterious blessing which happens when the wheels are turning smoothly. - Quentin Blake",

"In order to succeed, your desire for success should be greater than your fear of failure","Love is some loving someone whom you will not reach to!",

".How amazing is it to find someone who wants to hear about all the things that go on in your head","Instead of success in a base I hate, I prefer to loose in a base I enjoy.",

"Never bend your head. Always hold it high. Look the world straight in the eye.","",

"A tree far away from the forest!","Be patient.sometimes you have to go through the worst to get to the best!",

"We have a situation here that we can't believe that we don't believe us anymore!","If size mattered the elephant would be the king of jungle",

"Be the change that you wish to see in the world","We overlooked They thought we were blind!",

"Each person must live their life as a model for others.","The losers find problem in every answer but the winners find an answer in every problem"]

    var x3 = Math.floor(Math.random() * x.length);

    msg.channel.send(`${x[x3]}`)

  }

});
////////
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}
