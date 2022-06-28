const Discord = require("discord.js");
const config = require("./config.json");
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "+";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length).trim();
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }

    switch (command) {
        case 'босс':
            if (args.length !== 2) {
                message.reply('Команда введена неправильно! Попробуй +босс имя время');
                break;
            }

            const regPattern = '\\b[0-2]?\\d:[0-5]\\d\\b';
            const regExp = new RegExp(regPattern, 'i');

            let nameBoss = args?.shift()?.toLowerCase();
            if (!nameBoss || regExp.test(nameBoss) ) {
                message.reply('Имя босса введено неверно!');
                break;
            }

            let timeRespawn = args?.shift()?.toLowerCase();
            if (!timeRespawn || !regExp.test(timeRespawn)) {
                message.reply('Время введено неверно!');
                break;
            }

            let embed = new MessageEmbed();
            embed.setTitle('Новый пользователь!')
                .setColor('#ffffff') //Цвет полоски
                .setDescription('');
            // <@&991405471858692136> присоединился к серверу!
            message.channel.send('@everyone присоединился к серверу!', { embed: embed });


            break;
        case 'лист':
            let countList = args?.shift()?.toLowerCase();
            if (!countList) {
                console.log("внутри", countList);
            }
            console.log("вне if",countList);
            break;
        default:
            message.reply(`Такой команды не существует!`);
    }
});


client.login(config.TOKEN);