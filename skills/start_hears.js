module.exports = function (controller) {

    /**
     * New user message
     */
    controller.on('hello', function (bot, message) {
        bot.reply(message, 'Bienvenid@');
    })

    /**
     * 
     */
    controller.on('welcome_back', function (bot, message) {
        bot.reply(message, '¡Hola de nuevo!');
    });

    /**
     * Greetins
     */
    // controller.hears([
    //     'hola', 'hi', 'hello', 'halo', 'que onda', 'que tal', 'holi'
    // ], 'message_received', function (bot, message) {
    //     bot.reply(message, {
    //         text: 'I can hear you, my ugly friend',
    //         typingDelay: 500
    //     });
    // });
}