exports.run = (client, msg, args) => {
   msg.channel.send('Prefix for this guild is: ~')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefix',
  description: 'Tells the current prefix.',
  usage: 'prefix'
};
