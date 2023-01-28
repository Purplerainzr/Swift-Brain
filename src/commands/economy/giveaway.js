const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const ms = require("ms")
const db = require("quick.db")

module.exports = {
    name: "giveaway",
    aliases: ["sorteio"],
    cooldown: 1000 * 2,
    
    run: async(client, message, args) => {

      let language = db.get(`language_${message.guild.id}`);
      let prefix = db.get(`prefix_${message.guild.id}`) || "-"
      
      if (language === "pt-BR") { // PT-BR
        if (!message.member.permissions.has("MANAGE_GUILD")) {
          let embed = new Discord.MessageEmbed()
          .setDescription('> **Você não tem permissão para `Gerenciar Servidor`**')
          .setColor("PURPLE")
          return message.reply({ embeds: [embed] });
        }

        const canal = message.mentions.channels.first();
        const tempo = args[0]
        const prémio = args.slice(2).join(" ");

        const erro1 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Use: \`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)

        const erro2 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**O tempo precisa seguir do seguinte formato: 1d, 1h or 1m, D = Dias / H = Horas / M = Minutos.**`)

        const erro3 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Você precisa definir um canal específico! Use: \`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)

        const erro4 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Você precisa adicionar um premio! Use: \`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)


        if (!args[0]) {
          return message.reply({ embeds: [erro1] }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) {
          return message.reply({ embeds: [erro2] }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (isNaN(args[0][0])) {
          return message.reply({ embeds: [erro3] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!canal) {
          return message.reply({ embeds: [erro3] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!prémio) {
          return message.reply({ embeds: [erro4] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        const start = new Discord.MessageEmbed()
        .setTitle(prémio)
        .setDescription(`**Reaja (🎉) para participar!**\n **Acaba em: \`${tempo}\`**\n**Iniciado por: ${message.author}**`)
        .setTimestamp(Date.now() + ms(args[0]))
        .setFooter({ text: 'Termina ás' })
        .setColor("PURPLE");

        const finish = new Discord.MessageEmbed()
        .setTitle(prémio)
        .setDescription(`**Não há participantes suficientes para determinar um vencedor!**\n**Iniciado por: ${message.author}**`)
        .setColor("PURPLE")

          
        const m = await canal.send({ content: `🎉   **NOVO SORTEIO!**   🎉`, embeds: [start] })
        m.react("🎉");

        await message.channel.send({ content: `🎉 **NOVO SORTEIO EM:** ${canal}` });

        setTimeout(() => {
          if (m.reactions.cache.get("🎉").count <= 1) {
            return canal.send({ content: `🎉   **SORTEIO TERMINADO!**   🎉`, embeds: [finish]});
          }

          const decisão = m.reactions.cache
          .get("🎉")
          .users.cache.filter((u) => !u.bot)
          .random();

          const vencedor = new Discord.MessageEmbed()
          .setDescription(`**Ganhador: ${decisão}!**`)
          .setColor("PURPLE")
          canal.send({ content: `**GG ${decisão}! Você acaba de ganhar: ${prémio}!**`, embeds: [vencedor] });
        }, ms(args[0]));
      }
      if (!language || language === "en") { // EN
        if (!message.member.permissions.has("MANAGE_GUILD")) {
          let embed = new Discord.MessageEmbed()
          .setDescription('**Você não tem permissão para `Manager Server`**')
          .setColor("PURPLE")
          return message.reply({ embeds: [embed] });
        }

        const canal = message.mentions.channels.first();
        const tempo = args[0]
        const prémio = args.slice(2).join(" ");

        const erro1 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Use: \`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)

        const erro2 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**A hora precisa ter o seguinte formato: 1d, 1h ou 1m, D = Dia / H = Hora / M = Minuto.**`)

        const erro3 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Tem que mencionar um canal específico! Usar: \`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)

        const erro4 = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`**Tem que adicionar um prêmio! Use:\`${prefix}giveaway [tempo] + [canal] + [premio]\`**`)


        if (!args[0]) {
          return message.reply({ embeds: [erro1] }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) {
          return message.reply({ embeds: [erro2] }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (isNaN(args[0][0])) {
          return message.reply({ embeds: [erro3] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!canal) {
          return message.reply({ embeds: [erro3] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        if (!prémio) {
          return message.reply({ embeds: [erro4] }).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000) // 15 segundos
          })
        }

        const start = new Discord.MessageEmbed()
        .setTitle(prémio)
        .setDescription(`**Reagir (🎉) para participar!**\n **Acaba em: \`${tempo}\`**\n**Começado por: ${message.author}**`)
        .setTimestamp(Date.now() + ms(args[0]))
        .setFooter({ text: 'Ends at' })
        .setColor("PURPLE");

        const finish = new Discord.MessageEmbed()
        .setTitle(prémio)
        .setDescription(`**Não há participantes suficientes para determinar um vencedor!**\n**Começado por: ${message.author}**`)
        .setColor("PURPLE")

          
        const m = await canal.send({ content: `🎉   **NOVO SORTEIO**   🎉`, embeds: [start] })
        m.react("🎉");

        await message.channel.send({ content: `🎉 **NOVO SORTEIO EM** ${canal}` });

        setTimeout(() => {
          if (m.reactions.cache.get("🎉").count <= 1) {
            return canal.send({ content: `🎉   **FIM DO SORTEIO**   🎉`, embeds: [finish]});
          }

          const decisão = m.reactions.cache
          .get("🎉")
          .users.cache.filter((u) => !u.bot)
          .random();

          const vencedor = new Discord.MessageEmbed()
          .setDescription(`**O Ganhador(a) foi: ${decisão}!**`)
          .setColor("PURPLE")
          canal.send({ content: `**Parabéns ${decisão}! Acabou de ganhar ${prémio}**`, embeds: [vencedor] });
        }, ms(args[0]));
      }
    },
}