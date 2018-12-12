const Discord = require("discord.js");
const prefix = ("!");
const client = new Discord.Client();

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "ابلاغ")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`ابلاغ جديد!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - الشخص المبلغ عنة:**",mUser,true)
    .addField("**# - الاي دي:**",mUser.id,true)
    .addField("**# - السبب:**",messageReason,true)
    .addField("**# - المكان:**",message.channel,true)
    .addField("**# - الوقت:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لعقوبات")
message.channel.send(Rembed)
message.channel.send("__هل انت متأكد لارسال هذة الرسالو للاونر??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - تم! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - تم الاغلاق!**");
})
})
}
    if (message.isMentioned(client.user))
    {
    message.channel.send(" كيف اقدر اساعدك!!");
    } 
	return;
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '✥⇣❀شــــات̲الـتـرحـيـب❀⇣✥');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | الاسم :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====اهلا السيرفر نور بيك و الله====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', '✥⇣❀شــــات̲الـتـرحـيـب❀⇣✥')
    if (!channel) return;
    channel.send({embed : embed});
 
    });
	
    
	client.login(process.env.BOT_TOKEN);