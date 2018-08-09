module.exports = function (controller) {

    controller.hears('4',  'message_received', function (bot, message) {
        bot.reply(message, '¡Muy bien!')
    })

    controller.hears(/\d+/i,  'message_received', function (bot, message) {
        if (message.text != '4') {
            bot.reply(message, 'Intenta de nuevo')
        }
    })

    controller.hears([
        'la del'
    ], 'message_received', (bot, message) => {

        if (bot) {

    
            // bot.startConversation(message, (err, conversation) => {
    
            //     convo.addMessage({
            //         text: 'Perfecto!, practiquemos eso...'
            //     }, 'start_table')
    
            //     convo.addMessage({
            //         text: 'Cuando quieras continuar me avisas'
            //     }, 'finish_table')
    
            //     convo.addMessage({
            //         text: 'Excelente',
            //     }, 'good_answer')
    
            //     convo.addMessage({
            //         text: 'No!'
            //     }, 'bad_answer')
    
            //     convo.addQuestion('¿Cuánto es 2 x 2?', [
            //         {
            //             pattern: 'no se',
            //             callback (response, convo) {
            //                 convo.gotoThread('bad_answer')
            //             }
            //         },
            //         {
            //             pattern: /(\d+)/i,
            //             callback (response, convo) {
            //                 convo.gotoThread('good_answer')
            //             }
            //         },
            //         {
            //             default: true,
            //             callback (response, convo) {
            //                 convo.gotoThread('finish_table')
            //             }
            //         }
            //     ], {}, 'default')
    
            //     convo.activate()
            // })
        }
    })
}