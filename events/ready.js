const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = client => {
  client.user.setActivity(`~help | Protecting the offical Garden Discord!`)
  console.log(chalk.bgGreen.black(`Online and ready to serve ${client.guilds.size} servers.`));
};
