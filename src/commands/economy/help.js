const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "help",
    aliases: ["help", 'ajuda', 'hp'],

    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle(`Meus comandos`)
        .setAuthor({ name: 'Swift Brain', iconURL: 'https://media.discordapp.net/attachments/1065989360148807823/1066819006331363399/image.png?width=382&height=382'})
        .setDescription('Total de comandos: `26`')
        .setThumbnail('https://media.discordapp.net/attachments/1065989360148807823/1066819006331363399/image.png?width=382&height=382')
        .addFields(
            { name: 'Help', value: '`Veja essa mensagem`' },
            { name: 'Pay', value: '`Fazer pagamentos`' },
            { name: 'Top', value: '`Veja o Placar`' },
            { name: 'Daily', value: '`Resgatar crédito diário`' },
            { name: 'Hourly', value: '`Resgatar crédito`' },
            { name: 'Saldo', value: '`Veja seu Saldo`' },
            { name: 'Clear', value: '`Limpe o chat (MOD)`' },
            { name: 'FeedBack', value: '`Mande um FeedBack para o dono.`' },
            { name: 'Bug', value: '`Reporte um bug para o dono`' },
            { name: 'Ping', value: '`Veja meu ping`' },
            { name: 'Userinfo', value: '`Veja suas informações e de outros`' },
            { name: 'Servericon', value: '`Veja icon do servidor`' },
            { name: 'Serverinfo', value: '`Veja informações do servidor`' },
            { name: 'Avatar', value: '`Veja seu avatar e de outros`' },
            { name: 'Giveaway', value: '`Faça um sorteio (MOD)`' },
            { name: 'Lock', value: '`Bloqueie um chat (MOD)`' },
            { name: 'Unlock', value: '`Desbloqueie um chat (MOD)`', },
            { name: 'Comandos em Slash', value: '`em manutenção`', },
            { name: 'Bug', value: '`Reporte um bug para meu dono`', },
            { name: 'Coins', value: '`Veja seu saldo na economia`', },
            { name: 'Feedback', value: '`Envie um FeedBack para meu dono`', },
            { name: 'Hourly', value: '`Pegue seu Daily`', },
            { name: 'Pay', value: '`Envie pagamentos para membros`', },
            { name: 'Ping', value: '`Veja meu ping`', },
            { name: 'Stats', value: '`Veja minhas Stats`', },
            { name: 'Top', value: '`Veja o Top da Economia`', },
            { name: 'Uptime', value: '`Veja meu Uptime`', },
        )
        .setColor('PURPLE')
        .setTimestamp();

        message.reply({embeds:[embed]});
    }
}