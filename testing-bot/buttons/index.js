const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const { token } = require('../../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/f06fa6a3-8187-4ab4-a987-b0d87d4673f8?playlist=529')
					.setLabel('이슈 쉐어링')
					.setStyle('LINK'),
			)
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/2e3e9fd6-7551-4824-a3fd-eae6c3a2b9b9?playlist=530')
					.setLabel('HA FAQ')
					.setStyle('LINK'),
			)
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/a8d1f733-735e-4375-8c5b-3aa84513fd0f?playlist=530')
					.setLabel('General FAQ')
					.setStyle('LINK'),
			)
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/a3f681a6-bc5d-47aa-a331-e60de9251ea3?playlist=530')
					.setLabel('38기 이메일')
					.setStyle('LINK'),
			)
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/a3f681a6-bc5d-47aa-a331-e60de9251ea3?playlist=530')
					.setLabel('학습 방법 FAQ')
					.setStyle('LINK'),
			);
		const linkRow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://urclass.codestates.com/b3b091a9-ea8f-4a79-8633-60de2a7ad922?playlist=530')
					.setLabel('과제 제출 FAQ')
					.setStyle('LINK'),
			);
		// const embed = new MessageEmbed()
		// 	.setColor('#0099ff')
		// 	.setTitle('과제 제출 FAQ')
		// 	.setURL('https://urclass.codestates.com/b3b091a9-ea8f-4a79-8633-60de2a7ad922?playlist=530')
		// 	.setDescription('과제 제출과 관련한 궁금증이 있다면 클릭해주세요!');

		await interaction.reply({ content: 'discord.js 슬래시 명령어 테스트', ephemeral: true, components: [row, linkRow] });
	}
});

client.login(token);