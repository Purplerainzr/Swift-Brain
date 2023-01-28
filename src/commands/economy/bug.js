const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "bug",
  cooldown: 1000 * 2,

run: async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`) || "-"
  let language = db.get(`language_${message.guild.id}`);

  if (language === "pt-BR") { // PT-BR
    try {

      let sugerirENVIAR = client.channels.cache.get("1066934493761515690")
      let sugestão = args.slice(0).join(" ");
      
      if(!sugestão) {
        let embed_sugestion = new Discord.MessageEmbed()
        .setDescription(`**Para usar esse comando use \`${prefix}bug <reporte o bug>\`**`)
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_sugestion] }) 
      }
      
      if (sugestão.length > 215) {
        let embed_error = new Discord.MessageEmbed()
        .setDescription('**Seu reportamento de bug ultrapassou o limite de 215 characteres!**')
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_error] }) 
      }
      
      let sugerirEMBED = new Discord.MessageEmbed()
      .setTitle(`🔩 Bug Reportado!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**Um bug foi reportado por ${message.author.username}#${message.author.discriminator}:**\n**Bug:**\n${sugestão}`)
      .setColor("PURPLE")
      .setFooter({ text: `${message.guild.name} ©️ All rights reserved` })

      let embed_sucess = new Discord.MessageEmbed()
      .setDescription(`**Obrigado, por me ajudar e me apoiar relatando este bug! Foi enviado para meu criador!**`)
      .setColor("PURPLE")

      message.reply({ embeds: [embed_sucess] })
      sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})

    } catch (err) {
      console.log('Error detected in bug command')
    }
  }
  if (!language || language === "en") { // EN
    try {

      let sugerirENVIAR = client.channels.cache.get("1066934493761515690")
      let sugestão = args.slice(0).join(" ");
      
      if(!sugestão) {
        let embed_sugestion = new Discord.MessageEmbed()
        .setDescription(`**To use this command use \`${prefix}bug <report bug>\`**`)
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_sugestion] }) 
      }
      
      if (sugestão.length > 215) {
        let embed_error = new Discord.MessageEmbed()
        .setDescription('**The bug report cannot exceed 215 characters!**')
        .setColor("PURPLE")
        return message.reply({ embeds: [embed_error] }) 
      }
      
      let sugerirEMBED = new Discord.MessageEmbed()
      .setTitle(`🔩 Bug Reportado!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**Um bug foi reportado por ${message.author.username}#${message.author.discriminator}:**\n**Bug:**\n${sugestão}`)
      .setColor("PURPLE")
      .setFooter({ text: `${message.guild.name} ©️ All rights reserved` })

      let embed_sucess = new Discord.MessageEmbed()
      .setDescription(`**Obrigado, por me ajudar e me apoiar relatando este bug! Foi enviado para meu criador!**`)
      .setColor("PURPLE")

      message.reply({ embeds: [embed_sucess] })
      sugerirENVIAR.send({ embeds: [sugerirEMBED] }).then(msg => {})

    } catch (err) {
      console.log('Error detected in bug command')
    }
  }
}
}