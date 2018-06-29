const Discord = require("discord.js"); //YOU WILL NEED TO DEFINE DISCORD SINCE WE ARE USING THE EMBED!

exports.run = async (client, message, args) => { //OH BTW client IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "client" TO "CLIENT" cool!


    message.channel.startTyping(); 


    let msg = await message.channel.send('``Generating that avatar!``') 

    let user = message.mentions.users.first() || message.author; 


    let embed = new Discord.RichEmbed() 
        .setAuthor(`${user.username}'s Avatar`) 
        .setImage(user.displayAvatarURL) 
        .setColor(msg.guild.me.highestRole.color) 
        .setTimestamp(); 

    await message.channel.send(embed) 

    message.channel.stopTyping(true); 

    msg.delete();
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Displays the Avatar of the Mentioned user.',
  usage: 'avatar [mention]'
};