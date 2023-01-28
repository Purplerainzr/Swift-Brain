const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    name: 'clear',
    aliases: ["clean", "purge"],
    cooldown: 1000 * 2,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        let prefix = db.get(`prefix_${message.guild.id}`) || "-"

            if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
                let embed = new Discord.MessageEmbed()
                .setDescription('**Eu não tenho permissão para `Gerenciar Mensagens`**')
                .setColor("PURPLE")
                return message.reply({ embeds: [embed] });
            }
            if (!message.member.permissions.has("MANAGE_MESSAGES")) {
                return message.reply(`**Você não tem permissão para \`Gerenciar Mensagens\`**`)
            }
            try {
                let delamount = args[0];
                let msg_del = parseInt(delamount) + 1

                const usage = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .setDescription(`**> Use \`${prefix}clear <quantia>\`**`)

                if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({ embeds: [usage] }).then(m => {
                    setTimeout(() => {
                        m.delete()
                    }, 15000) // 15 segundos
                })

                const valmáx = new Discord.MessageEmbed()
                .setColor("PURPLE")
                .setDescription(`> **${message.author} o valor máximo é de 99 mensagens!**`)

                await message.channel.bulkDelete(parseInt(delamount) + 1, true);

                const clear = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .setDescription(`> **${message.author} o chat foi limpo!**`)

                await message.channel.send({ embeds: [clear] }).then(m => {
                    setTimeout(() => {
                        m.delete()
                    }, 15000) // 15 segundos
                })
              } catch (error) {
                console.log(error)
            }
        }
    }