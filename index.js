const {
    Telegraf,
    Markup
} = require('telegraf')
require('dotenv').config()
const text = require('./const')



const bot = new Telegraf(process.env.TOKEN)
var curDate = new Date()
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };

var graphArray =[]

graphArray[2]= 
'\n' + '00:00 - 02:00' + 
'\n' + '06:00 - 08:00' + 
'\n' + '12:00 - 14:00' + 
'\n' + '18:00 - 20:00'

graphArray[1]=
'\n' + '02:00 - 04:00' + 
'\n' + '08:00 - 10:00' + 
'\n' + '14:00 - 16:00' + 
'\n' + '20:00 - 22:00'

graphArray[0]=
'\n' + '04:00 - 06:00' + 
'\n' + '10:00 - 12:00' + 
'\n' + '16:00 - 18:00' + 
'\n' + '22:00 - 24:00'

var indxGraph1 = (4 + curDate.getDate()) % 3
var indxGraph2 = (3 + curDate.getDate()) % 3
var indxGraph3 = (5 + curDate.getDate()) % 3


// bot.start(ctx => console.log(ctx.message))

bot.start(ctx => {
    ctx.reply('Вкажіть вашу чергу відключення: ', 
    Markup.keyboard([['Черга 1'], ['Черга 2'], ['Черга 3']]).resize())
})

bot.help((ctx) => ctx.reply(text.commands))

/* bot.command('today', (ctx) => {
    ctx.replyWithHTML('<b>Дата</b>', Markup.keyboard(['Почати']).resize())
}
) */


bot.hears('Черга 1', ctx => {
 
        ctx.reply('1-ша черга. Сьогодні - '+ 
        '\n' + curDate.toLocaleString("ua",options) + 
        '\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1])
        console.log(curDate)



})

bot.hears('Черга 2', ctx => {
    ctx.reply('2-га черга. Сьогодні - '+ 
    '\n' + curDate.toLocaleString("ua",options) + 
    '\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2])
})

bot.hears('Черга 3', ctx => {
    ctx.reply('3-тя черга. Сьогодні - '+ 
    '\n' + curDate.toLocaleString("ua",options) + 
    '\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3])
})


bot.hears('1', ctx => {
    try {
        ctx.reply('1-ша черга. Сьогодні - '+ 
        '\n' + curDate.toLocaleString("ua",options) + 
        '\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1])
    } catch (e) {
        console.error(e)
    }

})

bot.hears('2', ctx => {
    ctx.reply('2-га черга. Сьогодні - '+ 
    '\n' + curDate.toLocaleString("ua",options) + 
    '\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2])
})

bot.hears('3', ctx => {
    ctx.reply('3-тя черга. Сьогодні - '+ 
    '\n' + curDate.toLocaleString("ua",options) + 
    '\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3])
})

bot.on('text', ctx => {
    ctx.reply('Вкажіть вашу чергу відключення (натисніть на відповідну кнопку)')
})

bot.on('voice', ctx => {
    ctx.reply('Глуха баба, девять - десять?')
})

bot.on('sticker', ctx => {
    ctx.reply('Це рівень не нижче Пікасо')
})

bot.on('edited_message', ctx => {
    ctx.reply('Ви змінили повідомлення')
})

bot.launch()