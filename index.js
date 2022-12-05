const {
    Telegraf,
    Markup
} = require('telegraf')
require('dotenv').config()
const text = require('./const')

// Block REDIS --------------------------------

/* const redis = require('redis');
const client = redis.createClient();
var valu1;

function connectRedisDB() {
    (async () => {
  
      await client.connect();
  
    })();
  }
  
  function setDataRedisDBsingle(keyDB,dataDB) {
    (async () => {await client.set(keyDB, dataDB)})()
  }
  
  function setDataRedisDBarray() {
    
    for (const item of arrKeys) {
      (async () => {await client.set(item, arrValues[arrKeys.indexOf(item)])})()
    }
    
    
  }
  
  function getDataRedisDBsingle(keyDB) {
    (async () => {
  
        valu1 = await client.get(keyDB);
        console.log(valu1)
        let objUser=JSON.parse(valu1)
        console.log(objUser.from.username)
        await client.disconnect();
   
    })()
  }
  
  
  function getDataRedisDBarray() {
    (async () => {
  
      for(let item of arrKeys) {
        valu1 = await client.get(item);
        console.log(valu1)
      } 
      
      await client.disconnect();
   
    })()
  }
  
  
  client.on('connect', function() {
    console.log('Connected!'); // Connected!
  }); */


// Block REDIS --------------------------------

//const fs = require('fs')

//function saveToFile(newMessage) {
//  fs.appendFile('users.txt', newMessage, function(error){
//   if(error) throw error; // если возникла ошибка
                 
/*     console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные */
//})
//}

const txtLine_1='\u0031\u20E3';
const txtLine_2='\u0032\u20E3';
const txtLine_3='\u0033\u20E3';

function makeStringMessage(ctxMsg) {
    const newMsg = ctxMsg.message.message_id +', ' +
    ctxMsg.message.from.id +', ' +
    ctxMsg.message.from.is_bot +', (' +
    ctxMsg.message.from.username +'), ' +
    ctxMsg.message.from.first_name +', ' +
    ctxMsg.message.from.last_name +', ' +
    ctxMsg.message.from.language_code +', ' +
    ctxMsg.message.chat.id +', ' +
    ctxMsg.message.chat.first_name +', ' +
    ctxMsg.message.chat.last_name +', ' +
    ctxMsg.message.chat.type +', ' +
    ctxMsg.message.date +', ' +
    ctxMsg.message.text + '\n'
  
    return newMsg
  
  }
  
  const bot = new Telegraf(process.env.TOKEN)
  
  function calendarKeyboard() {
  /*     return Markup.inlineKeyboard([
          Markup.callbackButton('7', '7'),
          Markup.callbackButton('8', '8'),
          Markup.callbackButton('9', '9'),
          Markup.callbackButton('10', '10'),
          Markup.callbackButton('11', '11'),
          Markup.callbackButton('12', '12'),
          Markup.callbackButton('13', '13')
      ], {columns: 7}) */
      return Markup.keyboard([
          ['Грудень 2022'],
          ['  ', '  ', '  ', '1', '2', '3', '4'],
          ['5', '6', '7', '8', '9', '10', '11'],
          ['12', '13', '14', '15', '16', '17', '18'],
          ['19', '20', '21', '22', '23', '24', '25'],
          ['26', '27', '28', '29', '30', '31', '  '],
  ]).resize()
  }
  
  function sendMessageCommand(ctxOriginal) {
    bot.telegram.sendMessage(331530824, logDateString + makeStringMessage(ctxOriginal))
    
  }
  
  function sendMessageHears(ctxOriginal, curDateOriginal) {
    bot.telegram.sendMessage(331530824,curDateOriginal.toLocaleString(dateZon,options)+'\n'+curDateOriginal.toLocaleTimeString()+'\n'+makeStringMessage(ctxOriginal))
    
  }
  
  function consoleMessage(curDate,ctx) {

  //  console.log(curDate)
  //  console.log(ctx.message)
  //  console.log(curDate + ', ' + makeStringMessage(ctx))
    
  }



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
  
  var logDate = new Date()
  var logDateString = logDate.toLocaleString(dateZon,options) + '\n'+logDate.toLocaleTimeString() + '\n'     
  var lineDate = 0
  
  var graphArray =[]
  
  
  
  
  /*
  // Грудень 2022

  graphArray[0]= 
  '\n' + '00:30 - 03:00' + 
  '\n' + '08:00 - 10:00' + 
  '\n' + '14:00 - 16:00' + 
  '\n' + '20:00 - 22:00'
  
  graphArray[1]=
  '\n' + '03:00 - 05:30' + 
  '\n' + '10:00 - 12:00' + 
  '\n' + '16:00 - 18:00' + 
  '\n' + '22:00 - 00:30'
  
  graphArray[2]=
  '\n' + '05:30 - 08:00' + 
  '\n' + '12:00 - 14:00' + 
  '\n' + '18:00 - 20:00' 
  
  const txtAvar = ''
  
  */


  // Грудень 2022 ГПВ (4- 2+)

  graphArray[0]= 
  '\n' + '00:30 - 05:30' + 
  '\n' + '08:00 - 12:00' + 
  '\n' + '14:00 - 18:00' + 
  '\n' + '20:00 - 00:30'
  
  graphArray[1]=
  '\n' + '03:00 - 08:00' + 
  '\n' + '10:00 - 14:00' + 
  '\n' + '16:00 - 20:00' + 
  '\n' + '22:00 - 00:30'
  
  graphArray[2]=
  '\n' + '00:30 - 03:00' +
  '\n' + '05:30 - 10:00' + 
  '\n' + '12:00 - 16:00' + 
  '\n' + '18:00 - 22:00' 
  
  const txtAvar='\u26A1<b> УВАГА! Застосовано ГПВ! </b>\u26A1\n(4 години \"-\" 2 години \"+\")\n\n'
  
 


  // Листопад 2022
  /*  
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
  
  const txtAvar = ''
  
  */
  
  /* '\n' + '10:00 - 12:00' + 
  '\n' + '16:00 - 18:00' + 
  '\n' + '22:00 - 24:00' */
  
  /*
  graphArray[2]= 
  '\n' + '00:00 - 04:00' + 
  '\n' + '06:00 - 10:00' + 
  '\n' + '12:00 - 16:00' + 
  '\n' + '18:00 - 22:00'
  
  graphArray[1]=
  '\n' + '02:00 - 06:00' + 
  '\n' + '08:00 - 12:00' + 
  '\n' + '14:00 - 18:00' + 
  '\n' + '20:00 - 00:00'
  
  graphArray[0]=
  '\n' + bs1s + '04:00 - 08:00' + bs1e + 
  '\n' + bs2s + '10:00 - 14:00' + bs2e +
  '\n' + bs3s + '16:00 - 20:00' + bs3e +
  '\n' + bs4s + '22:00 - 00:00' + bs4e 
  
  const txtAvar='\u26A1<b> УВАГА! Застосовано ГАВ! </b>\u26A1\n'
  */
  

  /*
  // 2 черга (2 грудня)
  graphArray[2]= 
  '\n' + '05:30 - 08:00' + 
  '\n' + '10:00 - 14:00' + 
  '\n' + '16:00 - 20:00' + 
  '\n' + '22:00 - 00:30'
  
  // 3 черга (2 грудня)
  graphArray[1]=
  '\n' + '00:30 - 03:00' + 
  '\n' + '05:30 - 10:00' + 
  '\n' + '12:00 - 16:00' + 
  '\n' + '18:00 - 22:00'
  
  // 1 черга (2 грудня)
  graphArray[0]=
  '\n' + bs1s + '03:00 - 05:30' + bs1e + 
  '\n' + bs2s + '08:00 - 12:00' + bs2e +
  '\n' + bs3s + '14:00 - 18:00' + bs3e +
  '\n' + bs4s + '20:00 - 00:00' + bs4e 
  
  const txtAvar='\u26A1<b> УВАГА! Застосовано ГПВ! </b>\u26A1\n(4 години \"-\" 2 години \"+\")\n\n'
  */

  /*
  // 2 черга (2 грудня)
  graphArray[2]= 
  '\n' + '05:30 - 08:00' + 
  '\n' + '10:00 - 14:00' + 
  '\n' + '16:00 - 20:00' + 
  '\n' + '22:00 - 00:30'
  
  // 3 черга (2 грудня)
  graphArray[1]=
  '\n' + '00:30 - 03:00' + 
  '\n' + '05:30 - 10:00' + 
  '\n' + '12:00 - 16:00' + 
  '\n' + '18:00 - 22:00'
  
  // 1 черга (2 грудня)
  graphArray[0]=1
  '\n' + bs1s + '00:30 - 05:30' + bs1e + 
  '\n' + bs2s + '08:00 - 12:00' + bs2e +
  '\n' + bs3s + '14:00 - 18:00' + bs3e +
  '\n' + bs4s + '20:00 - 00:30' + bs4e 
  
  const txtAvar='\u26A1<b> УВАГА! Застосовано ГПВ! </b>\u26A1\n(4 години \"-\" 2 години \"+\")\n\n'
  
  */
  
  
  
  
  
  
  bot.start(ctx => {
    var curDate = new Date()

    ctx.reply('Вкажіть вашу чергу відключення: ', 
    Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize())
    sendMessageCommand(ctx)
    consoleMessage(curDate,ctx)
    //saveToFile(makeStringMessage(ctx)+' '+curDate+'\n')
  })
  
  bot.help((ctx) => {
    ctx.reply(text.commands)
    sendMessageCommand(ctx)
    consoleMessage('',ctx)
    
  
  /* bot.command('today', (ctx) => {
    ctx.replyWithHTML('<b>Дата</b>', Markup.keyboard(['Почати']).resize())
  }
  ) */
  
  } )
  
  bot.command('myline', (ctx) => {
    ctx.replyWithHTML('Перелік адрес для визначення черги відключення'+'\n'+'https://bit.ly/3GR93PQ')
    sendMessageCommand(ctx)
    consoleMessage('',ctx)
  }
  )
  
  bot.hears('Дата (черга 1)', ctx => {
  
        ctx.replyWithHTML('Виберіть дату для черги 1',        
        calendarKeyboard())
        lineDate = 1
  
  })
  
  bot.hears('Дата (черга 2)', ctx => {
  
    ctx.replyWithHTML('Виберіть дату для черги 2',        
    calendarKeyboard())
    lineDate = 2
  
  })
  
  bot.hears('Дата (черга 3)', ctx => {
  
    ctx.replyWithHTML('Виберіть дату для черги 3',        
    calendarKeyboard())
    lineDate = 3
  
  })
  
  
  bot.hears('Завтра (черга 1)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate() + 1 ) % 3
    var indxGraph2 = (5 + curDate.getDate()) % 3
    var indxGraph3 = (6 + curDate.getDate()) % 3
  
        ctx.replyWithHTML('1-ша черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize())
        
        sendMessageHears(ctx,curDate)
        consoleMessage(curDate,ctx)
  })
  
  bot.hears('Завтра (черга 2)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (5 + curDate.getDate() + 1) % 3
    var indxGraph3 = (6 + curDate.getDate()) % 3
  
        ctx.replyWithHTML('2-га черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph2],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize())
        consoleMessage(curDate,ctx)
        sendMessageHears(ctx,curDate)})
  
  bot.hears('Завтра (черга 3)', ctx => {
   
    var curDate = new Date()
    var tomorrow = new Date(curDate.getTime() + (24 * 60 * 60 * 1000))
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (5 + curDate.getDate()) % 3
    var indxGraph3 = (6 + curDate.getDate() + 1) % 3
  
        ctx.replyWithHTML('3-тя черга. Завтра - '+ 
        '\n<b>' + tomorrow.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph3],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize())
        consoleMessage(curDate,ctx)
        sendMessageHears(ctx,curDate)
  })
  
  bot.hears('Черга 1', ctx => {
   
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (5 + curDate.getDate()) % 3
    var indxGraph3 = (6 + curDate.getDate()) % 3
  
        ctx.replyWithHTML(txtAvar+'1-ша черга. Сьогодні - '+ 
        '\n<b>' + curDate.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 1)', 'Дата (черга 1)']]).resize())
        
  
        //saveToFile(curDate + ', ' + makeStringMessage(ctx))
        //console.log(curDate + ', ' + makeStringMessage(ctx))
        consoleMessage(curDate,ctx)
        sendMessageHears(ctx,curDate)
  })
  
  bot.hears('Черга 2', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (5 + curDate.getDate()) % 3
    var indxGraph3 = (6 + curDate.getDate()) % 3
  
    ctx.replyWithHTML(txtAvar+'2-га черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2],
    Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 2)', 'Дата (черга 2)']]).resize())
    consoleMessage(curDate,ctx)
    sendMessageHears(ctx,curDate)
  })
  
  bot.hears('Черга 3', ctx => {
    
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (5 + curDate.getDate()) % 3
    var indxGraph3 = (6 + curDate.getDate()) % 3
  
    ctx.replyWithHTML(txtAvar+'3-тя черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3],
    Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 3)', 'Дата (черга 3)']]).resize())
    
    consoleMessage(curDate,ctx)
    sendMessageHears(ctx,curDate)
    
  
  })
  
  
  /*bot.hears('1', ctx => {
    
    if (lineDate===0) { 
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
  
        ctx.replyWithHTML('1-ша черга. Сьогодні - '+ 
        '\n<b>' + curDate.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph1],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 1)', 'Дата (черга 1)']]).resize())
        consoleMessage(curDate,ctx)
        sendMessageHears(ctx,curDate)
    }
  })
  
  bot.hears('2', ctx => {
    if (lineDate===0) {  
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
  
    ctx.replyWithHTML('2-га черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph2],
    Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 2)', 'Дата (черга 2)']]).resize())
    consoleMessage(curDate,ctx)
    sendMessageHears(ctx,curDate)
    } 
  })
  
  bot.hears('3', ctx => {
   if (lineDate===0) { 
    var curDate = new Date()
    var indxGraph1 = (4 + curDate.getDate()) % 3
    var indxGraph2 = (3 + curDate.getDate()) % 3
    var indxGraph3 = (5 + curDate.getDate()) % 3
    
    ctx.replyWithHTML('3-тя черга. Сьогодні - '+ 
    '\n<b>' + curDate.toLocaleString(dateZon,options) + 
    '</b>\n' + 'відключення електроенергії буде:' +
    '\n' +
    graphArray[indxGraph3],
    Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3'], ['Завтра (черга 3)', 'Дата (черга 3)']]).resize())
    consoleMessage(curDate,ctx)
    sendMessageHears(ctx,curDate)
   } 
  }) */
  
  
  bot.on('text', ctx => {
  if (ctx.message.text != 'Грудень 2022') {
  
    var curDate = new Date()
    var plusDays = ctx.message.text - curDate.getDate()
    var anyDate = new Date(curDate.getTime() + (plusDays * 24 * 60 * 60 * 1000))
  
    if (lineDate===1) {
        var indxGraph = (4 + curDate.getDate() + plusDays ) % 3
        
  
    } else if (lineDate===2) {
        var indxGraph = (5 + curDate.getDate() + plusDays) % 3
        
  
    } else if (lineDate===3) {   
        var indxGraph = (6 + curDate.getDate()+ plusDays) % 3 
        
  
    } else if (lineDate===0) {
        ctx.reply('Вкажіть вашу чергу відключення (натисніть на відповідну кнопку)',
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize()
        )    
  
    }
  
    if (lineDate != 0) {
        ctx.replyWithHTML(lineDate + ' черга. Дата - '+ 
        '\n<b>' + anyDate.toLocaleString(dateZon,options) + 
        '</b>\n' + 'відключення електроенергії буде:' +
        '\n' +
        graphArray[indxGraph],
        Markup.keyboard([['Черга 1', 'Черга 2', 'Черга 3']]).resize())
        lineDate = 0
        consoleMessage(curDate,ctx)
        //console.log(plusDays) 
        sendMessageHears(ctx,curDate)
    }
  
  }
  })
  
  bot.on('voice', ctx => {
    ctx.reply('Глуха баба, девять - десять?')
    sendMessageCommand(ctx)
  })
  
  bot.on('sticker', ctx => {
    ctx.reply('Це рівень не нижче Пікасо')
    sendMessageCommand(ctx)
  })
  
  bot.on('edited_message', ctx => {
    ctx.reply('Ви змінили повідомлення')
    sendMessageCommand(ctx)
  })

 
  
  

bot.launch()