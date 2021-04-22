const Discord = require('discord.js');


module.exports = {
        name: 'avatar',
        description: 'Show user avatar',
        aliases: ["icon", "servericon", "avatarserver"],
    async execute(message, args) {
    
        execute(message, args) {
        const { guild } = message
        let icon = guild.iconURL({size: 4096, dynamic: true})

        const servericonEmbed = new Discord.MessageEmbed()
        .setDescription(`Server icon for ${guild.name}:`)
        .setImage(icon)
        .setColor("#FF0000")
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp();

        message.channel.send(servericonEmbed)
    }
}
