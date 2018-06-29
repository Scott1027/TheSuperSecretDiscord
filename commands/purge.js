const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let logchannel = message.guild.channels.find('name', 'moderation-logging');
  if (!logchannel) return message.reply('I cannot find a moderation-logging channel').catch(console.error);
  async function purge() {
    message.delete();

    if (isNaN(args[0])) {

      message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');

      return;
    }

    const fetched = await message.channel.fetchMessages({
      limit: args[0]
    });


    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`Error: ${error}`));

  }


  purge();

  const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Action:', 'Purge')
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  return client.channels.get(logchannel.id).send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Purges the chat of the selected amount.',
  usage: 'purge [amount]'
};
