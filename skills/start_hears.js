module.exports = function (controller) {

    /**
     * New user message
     */
    controller.on('hello', function (bot, message) {
        bot.startConversation(message, (err, convo) => {
            convo.say('Hola')
            convo.say('Soy el bot matemático y estoy aquí para ayudarte a aprender las tablas de multiplicar')
            convo.say('¿Cuánto es 2 x 2?')
        })
    })

    /**
     * 
     */
    controller.on('welcome_back', function (bot, message) {
        bot.startConversation(message, (err, convo) => {
            convo.say('Hola')
            convo.say('Soy el bot matemático y estoy aquí para ayudarte a aprender las tablas de multiplicar')
            convo.say('¿Cuánto es 2 x 2?');
        })
    });

    /**
     * Greetins
     */
    // controller.hears([
    //     'hola', 'hi', 'hello', 'halo', 'que onda', 'que tal', 'holi'
    // ], 'message_received', function (bot, message) {

    //    bot.reply(message, 'Hola!')
    // });
}