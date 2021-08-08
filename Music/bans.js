const { MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");

module.exports = {
    name: 'bans',
    category: "Moderation Commands",
    description: "List all Server Bans",
    usage: "bans",
async execute(message, args) {
    

        message.guild.fetchBans().then(bans => {
            let bansembed = new MessageEmbed()
                .setTitle(`**Ban's**`)
                .setColor("#FF0000")
                .setDescription(`**Banned User**: ${bans.size}`)
                .setFooter("Status")
                .setTimestamp()
            message.lineReplyNoMention(bansembed).catch(console.error);

        })
    }
}
