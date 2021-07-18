const backup = require('discord-backup');

module.exports = {
    name: "backup-create",
    aliases: ["bc"],
    category: "backup",
    usage: "qbackup-create",
    description: "Get the bot's ping!",
    async execute(message, args, client) {
      if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: You need to have the `ADMINISTRATOR` to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'.backupData.id+'` Use `.backup-load '.backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');

    });

}
}
