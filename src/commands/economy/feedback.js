const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "feedback",
  cooldown: 1000 * 2,

run: async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`) || "-"
  let language = db.get(`language_${message.guild.id}`);

  if (language === "pt-BR") { // PT-BR
    try {
      let sugerirENVIAR = client.channels.cache.get("1066073875059851355")
      let sugestão = args.slice(0).join(" ");

      if(!sugestão) {
        let embed_sugestion = new Discord.MessageEmbed()
        .setDescription(`**Para usar esse comando use \`${prefix}feedback <feedback>\`**`)
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_sugestion] }) 
      }
      
      if (sugestão.length > 512) {
        let embed_error = new Discord.MessageEmbed()
        .setDescription('**O seu feedback ultrapassou 512 characteres!**')
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_error] }) 
      }
      
      let sugerirEMBED = new Discord.MessageEmbed()
      .setTitle(`🥰 **-** Novo Feedback!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**${message.author.username}#${message.author.discriminator} me deu um feedback! veja abaixo:**\n**\`${sugestão}\`**`)
      .setColor("PURPLE")
      .setFooter({ text: `${message.guild.name} ©️ All rights reserved` })

      let embed_sucess = new Discord.MessageEmbed()
      .setDescription(`**Obrigado, por me ajudar e me apoiar! Foi enviado para o suporte!**`)
      .setColor("PURPLE")

      message.reply({ embeds: [embed_sucess] })
      sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})

    } catch (err) {
      console.log('Error detected in feedback command')
    }
  }
  if (!language || language === "en") { // EN
    try {
      let sugerirENVIAR = client.channels.cache.get("1066073875059851355")
      let sugestão = args.slice(0).join(" ");

      if(!sugestão) {
        let embed_sugestion = new Discord.MessageEmbed()
        .setDescription(`**Para usar esse comando use \`${prefix}feedback <feedback>\`**`)
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_sugestion] }) 
      }
      
      if (sugestão.length > 512) {
        let embed_error = new Discord.MessageEmbed()
        .setDescription('**The feedback cannot exceed 512 characters!**')
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_error] }) 
      }
      
      let sugerirEMBED = new Discord.MessageEmbed()
      .setTitle(`🥰 **-** Novo FeedBack!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**${message.author.username}#${message.author.discriminator} me deu um feedback! veja abaixo:**\n**\`${sugestão}\`**`)
      .setColor("PURPLE")
      .setFooter({ text: `${message.guild.name} ©️ All rights reserved` })

      let embed_sucess = new Discord.MessageEmbed()
      .setDescription(`**Obrigado, por me ajudar e me apoiar! Foi enviado para o suporte!**`)
      .setColor("PURPLE")

      message.reply({ embeds: [embed_sucess] })
      sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})

    } catch (err) {
      console.log('Error detected in feedback command')
    }
  }
}
}