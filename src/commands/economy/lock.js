const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "lock",
    cooldown: 1000 * 2,

    run: async (client, message, args) => {

        let prefix = db.get(`prefix_${message.guild.id}`) || "-"

        let language = db.get(`language_${message.guild.id}`);
        if (language === "pt-BR") { // PT-BR
            if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
                let embed = new Discord.MessageEmbed()
                .setDescription('Eu não tenho permissão para `Gerenciar Canais`**')
                .setColor("PURPLE")
                return message.reply({ embeds: [embed] });
            }

            if(!message.channel.permissionsFor(`${message.guild.id}`).has(`SEND_MESSAGES`)) {
                let embed = new Discord.MessageEmbed()
                .setDescription(`**${config.emoji.no} Esse canal já está bloqueado! Use \`${prefix}unlock\`**`)
                .setColor("PURPLE")
                return message.reply({ embeds: [embed] });
            }

            try {

                if (!message.member.permissions.has("MANAGE_CHANNELS")) {
                    let embed = new Discord.MessageEmbed()
                    .setDescription('Você não tem permissão para `Gerenciar Canais`**')
                    .setColor("PURPLE")
                    return message.reply({ embeds: [embed] });
                }
                
                try {
                    message.channel.permissionOverwrites.edit(message.guild.id, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                } catch (e) {
                    console.log(e)
                }
    
                let sucess = new Discord.MessageEmbed()
                .setTitle(`✅ | Canal bloqueado com sucesso!`)
                .setColor("PURPLE")
                .setDescription(`🎉 | **${message.author} bloqueou esse canal!**`)
    
                message.reply({embeds: [sucess]})
    
            } catch (err) {
                console.log('Error detected in lock command')
            }
        }
        if (!language || language === "en") { // EN

            if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
                let embed = new Discord.MessageEmbed()
                .setDescription('Não tenho permissão para `Gerenciar Canais`**')
                .setColor("PURPLE")
                return message.reply({ embeds: [embed] });
            }

            if(!message.channel.permissionsFor(`${message.guild.id}`).has(`SEND_MESSAGES`)) {
                let embed = new Discord.MessageEmbed()
                .setDescription(`**${config.emoji.no} Este canal já está bloqueado! Usar \`${prefix}unlock\`**`)
                .setColor("PURPLE")
                return message.reply({ embeds: [embed] });
            }

            try {

                if (!message.member.permissions.has("MANAGE_CHANNELS")) {
                    let embed = new Discord.MessageEmbed()
                    .setDescription('Você não tem permissão para `Gerenciar Canais`**')
                    .setColor("PURPLE")
                    return message.reply({ embeds: [embed] });
                }
            
                try {
                    message.channel.permissionOverwrites.edit(message.guild.id, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                } catch (e) {
                    console.log(e)
                }
    
                let sucess = new Discord.MessageEmbed()
                .setTitle(`✅ | Canal bloqueado com sucesso`)
                .setColor("PURPLE")
                .setDescription(`🎉 | **${message.author} bloqueoou este canal!**`)
    
                message.reply({embeds: [sucess]})
    
            } catch (err) {
                console.log('Error detected in lock command')
            }
        }
        
    }
}