module.exports = function (controller) {

    /**
     * New user message
     */
    controller.on('hello', function (bot, message) {
        bot.reply(message, 'Bienvenid@');
        bot.reply(message, 'Soy el bot matemático y estoy aquí para ayudarte a aprender las tablas de multiplicar');
        bot.reply(message, '¿CuáNto es 2 x 2?');

    })

    /**
     * 
     */
    controller.on('welcome_back', function (bot, message) {
        bot.reply(message, 'Hola de nuevo.');
        bot.reply(message, '¿Cuáto es 2 x 2?');
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