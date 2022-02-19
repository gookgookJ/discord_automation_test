const fs = require('fs');
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const TOKEN = 'OTQ0NDk2OTk0MjEzMzE0NjIx.YhCdXw.EjnGVQZwtiZissU4b8rtGUPjpfA';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

console.log(client.guilds.resolveId);

client.login(TOKEN);