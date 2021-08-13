const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "Genel",
    description: "Etiketlediğiniz Kullanıcının Avatarını Gönderir!",
    cooldown: 3,
    guildOnly: true,
    execute(message, args, client, Embed, Discord){
        


        const mentionedPlayer = message.mentions.users.first() || message.author;
        if(!mentionedPlayer) return message.channel.send(Embed("",`${message.member} **Bir Kullanıcı Etiketleyin!**`, "#ff2f00"));
        
        
        if(mentionedPlayer.displayAvatarURL() == null) return message.channel.send(Embed("",`${mentionedPlayer.displayName} **Adlı Kullanıcının Avatarı Bulunmamakta!**`, "#ff2f00"));

        const playerAvatar = new Discord.MessageEmbed()
        .setDescription("Legendary Avatar")
        .setColor('RANDOM')
        .setFooter(`${message.member.user.username}#${message.member.user.discriminator} 
Tarafından istendi!
        `, message.member.user.avatarURL({dynamic: true, size: 256, format: 'png'}))
        .setImage(mentionedPlayer.displayAvatarURL({dynamic : true}));

        message.channel.send(playerAvatar);
        
        
        
      
}
}  