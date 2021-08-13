const { Message } = require("discord.js")
const { legendhayir } = require('../utils/emoji.json')
const { legendevet } = require('../utils/emoji.json')

module.exports = {
    name: "ban",
    category: "Yetkili",
    description: "Etiketlediğiniz Kullanıcıyı Sunucudan Kalıcı Olarak Yasaklar!",
    guildOnly: true,
    permission:"BAN_MEMBERS",
    execute(message, args, Embed, client, Discord, Tags, tag){
        const mentionedPlayer = message.mentions.members.first();
        if(!mentionedPlayer) return message.channel.send(Embed("", `${message.member} **Lütfen Bir Kullanıcı Etiketleyin!** ${legendhayir}`, "#ff2f00"));
    
    message.guild.members.ban(mentionedPlayer)
    .then(() => {
        message.channel.send(Embed("", `${mentionedPlayer.displayName} Adlı Kullanıcı ${message.member} Tarafından Sunucudan Kalıcı Olarak Yasaklandı! ${legendevet}`))
    })
    .catch(() => {
    message.channel.send(Embed("", `${message.member} ${mentionedPlayer.displayName} Adlı Kullanıcının Rolü Senden Yüksek Olduğu İçin Bu Kişiyi Yasaklayamam! ${legendhayir}`, "error"))
    })


}
}       