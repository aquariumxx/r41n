const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "nuke",
  aliases: ["nukechannel"],
  description: "Show text",
  usage: "",
  async execute(message, args, client) {

	               if (!message.member.hasPermission('ADMINISTRATOR'))
{ return; }
			message.channel.send("**Nuking This channel....**");
			
      
			const position = message.channel.position;
			const newChannel = await message.channel.clone();
			await message.channel.delete();
			newChannel.setPosition(position);
      newChannel.send("**Channel Nuked**");
			return newChannel.send("");
		

}
}
