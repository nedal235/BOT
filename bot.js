const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
;

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
var argresult = message.content.split(` `).slice(1).join(' ');
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "تم مسح الرسالة"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

  if(cmd === `${prefix}طرد`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~طرد~")
    .setColor("#e56b00")
    .addField("تم طرد", `${kUser} with ID ${kUser.id}`)
    .addField("من قبل", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("في", message.channel)
    .addField("الوقت", message.createdAt)
    .addField("السبب", kReason);

    let kickChannel = message.guild.channels.find(`name`, "chat-الشات");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}باند`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("you cant!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~باند~")
    .setColor("#bc0000")
    .addField("تم باند", `${bUser} with ID ${bUser.id}`)
    .addField("من قبل", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("باند في", message.channel)
    .addField("الوقت", message.createdAt)
    .addField("السبب", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "chat-الشات");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }

  if(cmd === `${prefix}السيرفر`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("معلومات السيرفر")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("الاسم", message.guild.name)
    .addField("تم عملة في", message.guild.createdAt)
    .addField("تاريخ دخولك السرفر", message.member.joinedAt)
    .addField("ْعدد الاعضاْ", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}البوت`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("معلومات البوت")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("الاسم", bot.user.username)
    .addField("تم عملة في", bot.user.createdAt);

    return message.channel.send(botembed);
  }
  
  if(cmd === `${prefix}بث`){

    bot.user.setGame(argresult , "https://www.twitch.tv/ninja");

    return message.channel.send("تم");
  }
 
  if(cmd === `${prefix}استماع`){

    bot.user.setActivity(argresult , {type:'LISTENING'});

    return message.channel.send("تم");
  }
   
  if(cmd === `${prefix}مشاهدة`){

    bot.user.setActivity(argresult , {type:'WATCHING'});

    return message.channel.send("تم");
  }
 
  if(cmd === `${prefix}لعب`){

    bot.user.setGame(argresult);

    return message.channel.send("تم");
  }

  if(cmd === `${prefix}قفل`) {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
 
  if(cmd === `${prefix}فتح`) {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }

if (message.content === 'مساعدة') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**المساعدة...**')
        .setDescription('**برفكس البوت (!)**')
        .addField('باند!', 'لعمل باند')
        .addField('طرد!', 'لعمل طرد')
        .addField('السيرفر!', 'لمعرفة معلومات السرفر')
        .addField('البوت!', 'لمعرفة معلومات البوت')
        .addField('قفل!', 'لقفل الشات')
        .addField('فتح!', 'لفتح الشات')
        .addField('عليك وضع ! قبل الامر', 'ملحوظة')
        .addField('ابلاغ!', 'للابلاغ عن احد لا يطيع القانون')
		.addField('!play', 'لتشغيل الاغاني')
		.addField('!skip', 'لتخطي الاغنية')
		.addField('!stop', ' لتوقيف الاغاني تماما')
		.addField('!volume', 'لتغير الصوت')
		.addField('!np', 'لمعرقة ماذا الان')
		.addField('!queue', 'للضافة اغنية الي القائمة')
		.addField('!pause', 'لتوقيف الاغنية موقتا')
		.addField('!resume', 'لأستكمال الاغاني')
		.addField('Just Wait', 'المزيد قريبا')
        .setFooter("عليك وضع ! قبل الامر: ملحوظة")
      message.channel.send(helpEmbed);
    }  
    return
if (message.content === '!id') {
        let idembed = new Discord.RichEmbed()
        .setTitle('iD')
        .setDescription('معرفة الاي دي')
        .setThumbnail('http://s.ppy.sh/a/${user.id}}')
        .setColor("#D0436A")
        .addField('Nickname', user.name, true)
        .addField('PP', Math.round(user.pp.raw), true)
        .addField('Rank', user.pp.rank, true)
        .addField('Level', Math.round(user.level), true)
        .addField('Country', user.country, true)
        .addField('Country Rank', user.pp.countryRank, true)
        .addField('Playcount', user.counts.plays, true)
        .addField('Accuracy', `${user.accuracyFormatted}`, true)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
      message.channel.send(idembed);
		
		
		
	}
	return

	
	});

bot.login("NTIxNzEyOTk0NDIyNjIwMTYw.DvQ0Jg.NiG8ICNTZwZnjCOrocZReQzBHd0");
