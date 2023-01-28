const Discord = require("discord.js")
const db = require("quick.db")

module.exports =  {
    name: "bug",
    description: "〘INFO〙》 Reporte um bug para mim",
    type: "CHAT_INPUT",
    options: [
        {
            name: 'bug',
            description: 'What the bug?',
            type: 'STRING',
            required: true
        }
    ],
    
    run: async (client, interaction, args) => {
        let language = db.get(`language_${interaction.guild.id}`);
        let prefix = db.get(`prefix_${interaction.guild.id}`) || "-";

        const bug = interaction.options.getString("bug");

        if (language === "pt-BR") {
            let sugerirENVIAR = client.channels.cache.get("1066934493761515690")

            if (bug.length > 512) {
                let embed_error = new Discord.MessageEmbed()
                .setDescription('**Seu reportamento de bug ultrapassou o limite de 215 characteres!**')
                .setColor("PURPLE")
                return interaction.reply({ embeds: [embed_error] }) 
            }

            let sugerirEMBED = new Discord.MessageEmbed()
            .setTitle(`🔩 Bug Reportado!`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setDescription(`**Um bug foi reportado por ${interaction.user.tag}! veja abaixo:**\n**\`${bug}\`**`)
            .setColor("PURPLE")
            .setFooter({ text: `${interaction.guild.name} ©️ All rights reserved` })

            let embed_sucess = new Discord.MessageEmbed()
            .setDescription(`**Obrigado, por me ajudar e me apoiar! Foi enviado para o suporte!**`)
            .setColor("PURPLE")

            interaction.reply({ embeds: [embed_sucess] })
            sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})
        } else if (language === "en" || !language) {
            let sugerirENVIAR = client.channels.cache.get("1066934493761515690")

            if (bug.length > 512) {
                let embed_error = new Discord.MessageEmbed()
                .setDescription('**The bug report cannot exceed 215 characters!**')
                .setColor("PURPLE")
                return interaction.reply({ embeds: [embed_error] }) 
            }

            let sugerirEMBED = new Discord.MessageEmbed()
            .setTitle(`🔩 New Bug Reported!`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setDescription(`**A bug has just been reported by ${interaction.user.tag}! see below:**\n**\`${bug}\`**`)
            .setColor("PURPLE")
            .setFooter({ text: `${interaction.guild.name} ©️ All rights reserved` })

            let embed_sucess = new Discord.MessageEmbed()
            .setDescription(`**Thanks, for helping and supporting me! It was sent to my support!**`)
            .setColor("PURPLE")

            interaction.reply({ embeds: [embed_sucess] })
            sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})
        }
    }
}