const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "bgirl",
  aliases: ["Bgirl"],
  description: "Show Gif",
  usage: "Gif",
  async execute(message, args, client) {
   
    let replies = ["https://images-ext-1.discordapp.net/external/spocdBlGimH-hIZUdKwfvYhFdcR8yhTkM4dnPC7UEi0/https/media.discordapp.net/attachments/857719206380437504/860535175662403635/tenor.gif", "https://images-ext-2.discordapp.net/external/Lri92CiZNWBf0p7xzizqx0enrQUMZNvy4cfTaa9pCOI/https/media.discordapp.net/attachments/852462956339658782/863541473374109706/High_End_Hippie.jpg", "https://images-ext-1.discordapp.net/external/oAqOrd5XejlY90A8wRWgn5faMpC47Tn0cVVxuofBMqQ/https/media.discordapp.net/attachments/857719206380437504/863035951861334026/20210703_000135.png", "https://images-ext-2.discordapp.net/external/sGL2d7UaIndTeJfUw_fJunDO6UbgpmcQLHDTHWEjTuM/https/media.discordapp.net/attachments/852462956339658782/858079074073051157/image0-9.jpg", "https://images-ext-1.discordapp.net/external/LXfIfwN_cRqzFmbKV7xY5jQbQli40WkX6LVmBrfNB_I/https/media.discordapp.net/attachments/852462914128445460/860546948730060830/tumblr_static_tumblr_static_57mqhepvcm0wcs4w8wgg4owok_focused_v3_1.gif", "https://images-ext-2.discordapp.net/external/FM1KkGGd0C18zj6e2I9rKL0hoyJPRnzk45BQveI0kiw/https/media.discordapp.net/attachments/857719206380437504/857920070076203028/ea39337aaa9fd7eeda3cbd9dda316fab.gif", "https://images-ext-2.discordapp.net/external/9-i9m9lTwM8ZZsBy6NKG0bPEGTmtuI7ZRIX5NPFsYXA/https/media.discordapp.net/attachments/857719206380437504/862334797582172170/nazli_7.gif", "https://images-ext-1.discordapp.net/external/NbKKKQJBoB5aMNScTY21njCk69S8pQYV7yzuy4buB6E/https/media.discordapp.net/attachments/857719206380437504/862336295250690078/nazli_21.gif", "https://images-ext-1.discordapp.net/external/YwSkTduhyQbQhYzz7p6s9zzFggI8ED2P1oF4CxrP6kw/https/media.discordapp.net/attachments/857719206380437504/862334596221894656/nazli_6.gif", "https://images-ext-2.discordapp.net/external/lU1nTAMC9lJcpNtJhksbA9b-MGxkywYpVhtbqBfFu8Q/https/media.discordapp.net/attachments/852462956339658782/863511689529393152/20200612_090954.png", "https://images-ext-2.discordapp.net/external/Frm59Nul5vZe783cIay0Gy_p8jkMw_0Dmu1vp8vcXgQ/https/media.discordapp.net/attachments/857719206380437504/857920023086891028/7b20df2a7c0ce3d07f7c6d4c68378d7c.gif", "https://images-ext-2.discordapp.net/external/ttmbgfTZJVu9LoK3ieavHJZSpvHRABG_JZpA03cK4uU/https/media.discordapp.net/attachments/852462914128445460/865342817474707456/bd4166ec018b86c768a94c835d7a9ace.gif", "https://images-ext-1.discordapp.net/external/boGKd0IRnXh9wu91aJEl_GOK4vpzhZRr_bJOF3aMZf0/https/media.discordapp.net/attachments/857719206380437504/862734231397203998/6343784.gif", "https://images-ext-1.discordapp.net/external/Ow8kRbyVpSnX5Jgv6I1VA0D5x95XjJNoP1B2krftHcs/https/media.discordapp.net/attachments/852462956339658782/865780883116916746/1626488603771.jpg", "https://images-ext-1.discordapp.net/external/KKbAW5MY70qHJFTyjIA-xmAeSCnokdkXsSFaxjkIIvQ/https/media.discordapp.net/attachments/852462956339658782/863542387036520448/88_film_-_Alchetron_The_Free_Social_Encyclopedia.jpg", "https://images-ext-1.discordapp.net/external/xFumofcPJ0LLPYEu85YFxwCOYJBQYlMD7OHFYOwfRpc/https/media.discordapp.net/attachments/857719206380437504/864213864374992916/c1f78d45192e2ab1c0f0e3756252fb30.gif", "https://images-ext-1.discordapp.net/external/xhzuLNHBfWUM5PUm27luRayHf1L5lPO9Qy9aL9U_s_c/https/media.discordapp.net/attachments/857719206380437504/861606581979971594/fb02c460cdcc3045938561fec4d2aa1c.png", "https://images-ext-2.discordapp.net/external/fH7f0OyFTmL1G_37HWeycsdP8zeevC6FIBej8_eiRF0/https/media.discordapp.net/attachments/852462956339658782/858079079843627038/image0-8.jpg"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Girl Banner")   
    .setURL(replies[result])
    .setColor("#FF0000")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setImage(replies[result]);

    message.lineReplyNoMention(gifembed).catch(console.error);

   
  }
};
