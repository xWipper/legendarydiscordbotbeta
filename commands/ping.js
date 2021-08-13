const { Message } = require("discord.js")

module.exports = {
    name: "ping",
    category: "Genel",
    description: "Botun ve Disord'un Anlık Pingini Gösterir!",
    cooldown: 3,
    aliases: ["p", "ms"],
    execute(message, args, Embed, client, Discord, Tags, tag){
        const discordPing = message.client.ws.ping;
       
       
        message.channel.send(Embed("", "Ping Hesaplanıyor...")).then(msg => {
            const ping = msg.createdTimestamp  - message.createdTimestamp;
            msg.edit(Embed("", `Discord Gecikmesi : ${discordPing} ms\nBot Gecikmesi: ${ping} ms`));

        })
    }    
}