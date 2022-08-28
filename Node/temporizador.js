const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15* * 4', function ()  {
    console.log('tarefa 1' , new Date().getSeconds())
})

/* ('*5 *(segundos,) 15* (horas)* 4(dia da semana)) */