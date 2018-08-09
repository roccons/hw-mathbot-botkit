module.exports = function (controller) {

    controller.hears([
        'la del'
    ], (bot, message) => {

        bot.reply(message, 'hola')

        bot.startConversation(message, (err, conversation) => {

            convo.addMessage({
                text: 'Perfecto!, practiquemos eso...'
            }, 'start_table')

            convo.addMessage({
                text: 'Cuando quieras continuar me avisas'
            }, 'finish_table')

            convo.addMessage({
                text: 'Excelente',
            }, 'good_answer')

            convo.addMessage({
                text: 'No!'
            }, 'bad_answer')

            convo.addQuestion('¿Cuánto es 2 x 2?', [
                {
                    pattern: 'no se',
                    callback (response, convo) {
                        convo.gotoThread('bad_answer')
                    }
                },
                {
                    pattern: /(\d+)/i,
                    callback (response, convo) {
                        convo.gotoThread('good_answer')
                    }
                },
                {
                    default: true,
                    callback (response, convo) {
                        convo.gotoThread('finish_table')
                    }
                }
            ], {}, 'default')

            convo.activate()
        })
    })
}