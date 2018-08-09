module.exports = controller => {

    controller.hears([
        'adios', 'bye', 'chao', 'me voy', 'xao'
    ], 'message_received', (bot, message) => {
        
        bot.reply(message, {
            text: 'Ps vete!',
            typingDelay: 500
        })
    })
}