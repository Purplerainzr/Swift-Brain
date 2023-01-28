const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")

module.exports = {
    name: "t",
    aliases: ["t"],
    cooldown: 1000 * 2,

    run: async(client, message, args) => {

        let language = db.get(`language_${message.guild.id}`);
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let avatar = user.displayAvatarURL({ dynamic: true });

            let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(avatar)
            .addFields(
                {
                    name: `**\\#️⃣ Tag**`,
                    value: `**\`${user.tag}\`**`,
                    inline: true
                },
                {
                    name: `**\\🆔 ID**`,
                    value: `**\`${user.id}\`**`,
                    inline: true
                },
                {
                    name: `**\\📅 Data de criação:**`,
                    value: `**\`${moment(user.createdAt).format('LLL')}\`\n**`,
                    inline: true
                },
                {
                    name: `**\\🕒 Ultima vez:**`,
                    value: `**\`${moment(user.joinedAt).format('LLL')}\`\n**`,
                    inline: true
                },
            );

            message.reply({ embeds: [embed]}).catch(() => {
                message.channel.send('**Desculpe mas eu não posso executar esse comando por falta de permissões!**')
            })
        }
 
    }