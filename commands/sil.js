module.exports = {
    name: "sil",
    category: "Yetkili",
    description: "Mesajları Toplu Olarak Siler! (2-100 Arası)",
    guildOnly: true,
    cooldown: 5,
    permission: "MANAGE_MESSAGES",
    execute(message, args, Embed, client, Discord, Tags, tag){

        const sayi = parseInt(args[0]);
        if(isNaN(sayi)) return message.channel.send(Embed("", "Silmek İçin 2-100 Arası Bir Sayı Girin!", "#ff0000"));

        if(sayi <= 1 || sayi > 99) return message.channel.send(Embed("", "Silenecek Mesaj Sayısı Min : 2 / Max : 100 Olmadılıdır!", "#ff0000"));

        message.channel.bulkDelete(sayi+1, false).then(() => {
            return message.channel.send(Embed("", `**${sayi}** Adet Mesaj Başarıyla **Temizlendi!**`, "#75ffa8"))
            })
            .catch(() => {
                return message.channel.send(Embed("", "14 Günden Eski Mesajları Silemem!", "#ff0000"));
            })
    }
}
