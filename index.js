const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('ODA2ODQwMjEyNjA4OTA5MzQ0.YBvSgQ._XQrYqTs_4tLb2hh1yaUFrxMUUs');
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
      

    client.user.setActivity(`${PREFIX}help`, { type: "COMPETING"});

    
   
  
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
    .setDescription(`
**Support Server - [Click Me](https://discord.gg/msAz8e4YTn)
Bot Link - [Click Me](https://discord.com/api/oauth2/authorize?client_id=806840212608909344&permissions=8&scope=bot)**
`)
    .setTitle(`
Join a voice channel and \`${prefix}play\` a song.
Type \`${prefix}help\` for the list of commands.`));
  } 
  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor(`Reyna`, `https://cdn.discordapp.com/attachments/843342058352541706/849755772346302484/PicsArt_05-25-07.10.31.jpg`)
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }

/////////////
if(message.content.startsWith(`${prefix}status`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setDescription(`
Servers: ${client.guilds.cache.size}
Users: ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
Channels: ${client.channels.cache.size}
`)

    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:815583574983966720>")
  } 

//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}botinfo`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor("Info Reyna Bot")
    .setThumbnail(`https://cdn.discordapp.com/avatars/806840212608909344/ef9620d76b1c839097196f6fb3822c88.webp?size=1024`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .addField("**My Name** : ", `${client.user.tag} `, true)
    .addField("**My ID** : ", ` ${client.user.id} `, true)
    .addField("**My Prefix** : ", `${prefix}`, true)
    .addField("**Libary** : ", `Discord.js`, true)
    .addField("**Discord.js Version** : ", `12.5.3`, true)
    .addField('**My Ping**' , `${client.ws.ping}` , true)
    .addField("**Gulids** : ", `${client.guilds.cache.size}`, true)
    .addField("**Creator** : ", `<@790233637580832788>`, true)
    .addField("**Admins** : ", `<@749659830809002014>`, true)

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
> This Is Server Support Reyna
[Support](https://discord.gg/f3jjNz2WyK)`)
    .setTitle(`**Support Reyna**`) 
    
    //send the Message
    message.channel.send(embed)
   message.react("<:emoji_4:815583574983966720>")
  } 

//An cv announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}cv`)){
    //define saymsg
     if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
    .setDescription(saymsg)
    .setTimestamp()
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  } 

//An code announcement for everyone but no one knows so fine ^w^
if(message.content.startsWith(`${prefix}vote`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:emoji_4:815583574983966720>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Reyna`, `https://cdn.discordapp.com/attachments/843342058352541706/849755772346302484/PicsArt_05-25-07.10.31.jpg`)
    .setTitle(`\`Reyna in top.gg\``)
    .setDescription("\`Vote Link\` https://top.gg/bot/806840212608909344/vote")
    .setFooter(`Thank you for vote`)
    .setColor("#FF0000")
    //send the Message
    message.channel.send(embed)
  }

////////////
client.on('ready', () => {
var channel = client.channels.cache.get('862733355367923742');
    if (channel) channel.join();
});

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
  let channel = client.channels.cache.get("862698849147813948");
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
  let channel = client.channels.cache.get("862698849147813948");
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

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pboy")) {
    let man = [
      "https://cdn.discordapp.com/attachments/752914781941268563/825347506912755722/image0.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/793394311101415424/image0.jpg",
      "https://cdn.discordapp.com/attachments/694694407278034944/815641038512980008/81ea521b5816b8a3a0712791b3fcacd2.png",
      "https://cdn.discordapp.com/attachments/737803397314510849/782242896862380102/cb15548a4f3e47190aebafe2b35728cc.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/802038773864988692/image1.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/793394316495552542/image0.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/803985248534790164/image9.png",
      "https://cdn.discordapp.com/attachments/694694407278034944/815995959845716028/Lucent_6.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/770004598941286460/image1.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/802038857452486656/image1.jpg",
      "https://cdn.discordapp.com/attachments/694694407278034944/815996248510169098/e56f2687c624865b3fc5d801e8562fc4.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/801421780388282388/ICON_.jpg",
      "https://cdn.discordapp.com/attachments/737803397314510849/803984953422905354/image9.png",
      "https://cdn.discordapp.com/attachments/694694407278034944/815640752113319976/52f68e1ddf672fab5f465562497d73c1.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**Boy Photo**`,
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
  if (message.content.startsWith(PREFIX + "panimal")) {
    let man = [
      "https://media.discordapp.net/attachments/772786587674869794/804083997604315175/They_are_looking_at_a_very_beautiful_person_.jpg",
      "https://media.discordapp.net/attachments/608711490223996995/815017673171009576/29372a47c35ddef8bc5cf0a337ec6ad1.jpg",
      "https://media.discordapp.net/attachments/608711490223996995/815517083587837982/20210103_185527.jpg",
      "https://media.discordapp.net/attachments/772786587674869794/801750599263191090/Our_Obsession_With_Smudge_The_Table_Cat_Is_Unmatched_18_Smudge_Pics.jpg",
      "https://media.discordapp.net/attachments/608711490223996995/815516889026920468/image0-1.jpg",
      "https://media.discordapp.net/attachments/772786587674869794/791940857263423528/image0.jpg",
      "https://media.discordapp.net/attachments/772786587674869794/791940757971009576/image0.jpg",
      "https://media.discordapp.net/attachments/772786587674869794/799756830913593354/on_Twitter.jpg",
      "https://media.discordapp.net/attachments/772786587674869794/799756929836515348/when_i_saw_u.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**Animal Photo**`,
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
  if (message.content.startsWith(PREFIX + "panime")) {
    let man = [
      "https://media.discordapp.net/attachments/737803691565907991/804092905035005982/mary_saotome_icons.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/814871062239903764/d2059068eedf5211dfd5a0c689b38fca.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/814871298621571083/3e00cb772cb221c347d098031b4640a9.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/810183657021112320/image1.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/804092873443508224/aesthetic_usernames.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/799748816202760192/Anime_Pics__Gifs_on_Twitter.png",
      "https://media.discordapp.net/attachments/737803691565907991/804092913956945991/S_H_O_P.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/805865446028607559/image0.jpg",
      "https://media.discordapp.net/attachments/737803691565907991/799748816316006440/matching_icons.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**Anime Photo**`,
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
  if (message.content.startsWith(PREFIX + "pcouple")) {
    let man = [
      "https://cdn.discordapp.com/attachments/764935873526628462/803987516624470016/image4.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/802051130540294144/Radio_rediscovered_.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/802041794673901578/image1.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/803987535810265098/image3.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/793828190170775562/d71.PNG",
      "https://cdn.discordapp.com/attachments/764935873526628462/793827737805520906/d89.PNG",
      "https://cdn.discordapp.com/attachments/764935873526628462/803987535415214130/image2.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/802051098621509652/b59f9753c350fad0.jpg",
      "https://cdn.discordapp.com/attachments/764935873526628462/802041450338582568/image8.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**Couple Photo**`,
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
