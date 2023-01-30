const config = require('./config.json');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log(`Ready`);
});

client.on('message', async message => {
	// Turns the bot on
	
	if (message.author.bot) 
        return; 
	// The bot will ignore messages from other bots
	
	if (!message.content.startsWith(config.prefix)) 
        return;
	// Ignores messages that don't start with the prefix

	if (message.content == `${config.prefix}ping`) {
	// Read for the ping command
		message.channel.send(`Pong!`);
		// Send 'pong' into the channel if the ping command is heard
		}
	}
);
client.login(process.env.TOKEN);
