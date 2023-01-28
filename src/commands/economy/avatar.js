const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

module.exports = {
    name: 'avatar',
    cooldown: 1000 * 2,

    run: async (client, message, args) => {

        let language = db.get(`language_${message.guild.id}`);
        if (language === "pt-BR") { // PT-BR
            let msg = await message.reply("**🔍 | Procurando...**");
            const user = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author;
            const avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
            const embed = new MessageEmbed()
                .setColor("PURPLE")
                .setTitle(`📷 Foto de perfil`)
                .addField(`Avatar de:`, `\`${user.username}\``, true)
                .addField(`Baixar:`, `[[Aperte Aqui]](${avatar})`, true)
                .setImage(avatar)
                .setFooter(client.user.username)
                .setTimestamp();
            message.reply({ embeds: [embed] }).catch(() => {
                message.reply('**Me desculpe mais eu não tenho permissão de enviar imagens!**')
            })
            msg.delete()
        }

        if (!language || language === "en") { // EN
            let msg = await message.reply("**🔍 | Puxando...**");
            const user = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author;
            const avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
            const embed = new MessageEmbed()
                .setColor("PURPLE")
                .setTitle(`📷 Avatar do perfil`)
                .addField(`Avatar from:`, `\`${user.username}\``, true)
                .addField(`Baixar:`, `[[Aperte aqui]](${avatar})`, true)
                .setImage(avatar)
                .setFooter(client.user.username)
                .setTimestamp();
            message.reply({ embeds: [embed] }).catch(() => {
                message.reply('**Me desculpe mais eu não tenho permissão de enviar imagens!**')
            })
            msg.delete()
        }
    },
};