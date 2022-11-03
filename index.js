const {
    Telegraf,
    Markup
} = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.TOKEN)

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};

const dateZon = "uk"
var bs1s = '',
    bs2s = '',
    bs3s = '',
    bs4s = '',
    bs1e = '',
    bs2e = '',
    bs3e = '',
    bs4e = ''

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
'\n' + bs1s + '04:00 - 06:00' + bs1e + 
'\n' + bs2s + '10:00 - 12:00' + bs2e +
'\n' + bs3s + '16:00 - 18:00' + bs3e +
'\n' + bs4s + '22:00 - 24:00' + bs4e 

/* '\n' + '10:00 - 12:00' + 
'\n' + '16:00 - 18:00' + 
'\n' + '22:00 - 24:00' */

bot.start(ctx => {
    ctx.reply('Вкажіть вашу чергу відключення: ', 
    Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3']).resize())
})

bot.help((ctx) => ctx.reply(text.commands))

/* bot.command('today', (ctx) => {
    ctx.replyWithHTML('<b>Дата</b>', Markup.keyboard(['Почати']).resize())
}
) */

bot.hears('Завтра (черга 1)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate() + 1 ) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
 
        ctx.replyWithHTML('1-ша черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3']).resize())
        console.log(curDate)
        console.log(ctx.message)
})

bot.hears('Завтра (черга 2)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate() + 1) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
 
        ctx.replyWithHTML('2-га черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph2],
        Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3']).resize())
        console.log(curDate)
        console.log(ctx.message)
})

bot.hears('Завтра (черга 3)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate() + 1) % 3
 
        ctx.replyWithHTML('3-тя черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph3],
        Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3']).resize())
        console.log(curDate)
        console.log(ctx.message)
})

bot.hears('Черга 1', ctx => {
   
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3

        ctx.replyWithHTML('1-ша черга. Сьогодні - '+ 
        '\n<b>' + curDate.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 1)']).resize())
        console.log(curDate)
        console.log(ctx.message)
})

bot.hears('Черга 2', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3

    ctx.replyWithHTML('2-га черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2],
    Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 2)']).resize())
    console.log(curDate)
    console.log(ctx.message)
})

bot.hears('Черга 3', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3

    ctx.replyWithHTML('3-тя черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3],
    Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 3)']).resize())
    
    console.log(ctx.message)
    console.log(curDate.toLocaleString(dateZon,options))
    console.log(curDate)
    console.log(curDate.toLocaleTimeString())
    

})


bot.hears('1', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3

        ctx.replyWithHTML('1-ша черга. Сьогодні - '+ 
        '\n<b>' + curDate.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 1)']).resize())
        console.log(curDate)
        console.log(ctx.message)
})

bot.hears('2', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3

    ctx.replyWithHTML('2-га черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2],
    Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 2)']).resize())
    console.log(curDate)
    console.log(ctx.message)
})

bot.hears('3', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
    
    ctx.replyWithHTML('3-тя черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3],
    Markup.keyboard(['Черга 1', 'Черга 2', 'Черга 3', 'Завтра (черга 3)']).resize())
    console.log(curDate)
    console.log(ctx.message)
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