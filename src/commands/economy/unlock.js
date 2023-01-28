const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "unlock",
    cooldown: 1000 * 2,

    run: async (client, message, args) => {

        let prefix = db.get(`prefix_${message.guild.id}`) || "-"

        let language = db.get(`language_${message.guild.id}`);
        if (language === "pt-BR") { // PT-BR

            if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
                let embed = new Discord.MessageEmbed()
                .setDescription('**Eu não tenho permissão para `Gerenciar Canais`**')
                .setColor("WHITE")
                return message.reply({ embeds: [embed] });
            }

            if(message.channel.permissionsFor(`${message.guild.id}`).has(`SEND_MESSAGES`)) {
                let embed = new Discord.MessageEmbed()
                .setDescription(`**${config.emoji.no} Esse canal já está desbloqueado! Use \`${prefix}lock\`**`)
                .setColor("WHITE")
                return message.reply({ embeds: [embed] });
            }

            try {

                if (!message.member.permissions.has("MANAGE_CHANNELS")) {
                    let embed = new Discord.MessageEmbed()
                    .setDescription('**Você não tem permissão para `Gerenciar Canais`**')
                    .setColor("WHITE")
                    return message.reply({ embeds: [embed] });
                }
                
                message.channel.permissionOverwrites.edit(message.guild.id, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
    
                let sucess = new Discord.MessageEmbed()
                .setTitle(`✅ | Canal desbloqueado com sucesso!`)
                .setColor("WHITE")
                .setDescription(`🎉 | **${message.author} desbloqueou esse canal!**`)
    
                message.channel.send({embeds: [sucess]})
    
            } catch (err) {
                console.log('Error detected in unlock command')
            }
        }
        if (!language || language === "en") { // EN

            if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
                let embed = new Discord.MessageEmbed()
                .setDescription('**Não tenho permissão para `Gerenciar Canais`**')
                .setColor("WHITE")
                return message.reply({ embeds: [embed] });
            }

            if(message.channel.permissionsFor(`${message.guild.id}`).has(`SEND_MESSAGES`)) {
                let embed = new Discord.MessageEmbed()
                .setDescription(`**${config.emoji.no} Este canal já está desbloqueado! Use:\`${prefix}lock\`**`)
                .setColor("WHITE")
                return message.reply({ embeds: [embed] });
            }

            try {

                if (!message.member.permissions.has("MANAGE_CHANNELS")) {
                    let embed = new Discord.MessageEmbed()
                    .setDescription('**Você não tem permissão para `Gerenciar Canais`**')
                    .setColor("WHITE")
                    return message.reply({ embeds: [embed] });
                }
                
                message.channel.permissionOverwrites.edit(message.guild.id, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
    
                let sucess = new Discord.MessageEmbed()
                .setTitle(`✅ | Canal desbloqueado com sucesso!`)
                .setColor("WHITE")
                .setDescription(`🎉 | **${message.author} Desbloqueou**`)
    
                message.channel.send({embeds: [sucess]})
    
            } catch (err) {
                console.log('Error detected in unlock command')
            }
        }
        
    }
}