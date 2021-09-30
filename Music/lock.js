const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const { lineReply } = require("discord-reply")
const db = require('quick.db');
const { MessageButton , MessageActionRow } = require
 ("discord-buttons")
 
module.exports = {
    name: "lock",
    cooldown: 5,
    aliases: ["lock"],
    usage: "lock [#channel]",
    category: "admin",
    description : "make everyone can't send messages is chat",
    async execute(message, args, client) {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReplyNoMention(
new MessageEmbed()
.setColor("#00DAFF")
.setDescription("**You Need `MANAGE_CHANNELS` Permission To Use This Command!**")
.setFooter(`${message.author.tag}`, message.author.avatarURL()))
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReplyNoMention(new MessageEmbed()
	    .setColor("#00DAFF")
	    .setDescription(`**:lock: - ${message.channel} Channel Has Locked**`)
	    .setFooter(`${message.author.tag}`, message.author.avatarURL()))
 
	
    }
};
