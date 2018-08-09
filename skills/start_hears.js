module.exports = function (controller) {

    /**
     * New user message
     */
    controller.on('hello', function (bot, message) {
        bot.reply(message, 'Bienvenid@');
        bot.reply(message, 'Soy el bot matemático y estoy aquí para ayudarte a aprender las tablas de multiplicar');
        bot.reply(message, '¿Cuá tabla quieres practicar?');

    })

    /**
     * 
     */
    controller.on('welcome_back', function (bot, message) {
        bot.reply(message, 'Hola de nuevo.');
        bot.reply(message, '¿Cuá tabla quieres practicar?');
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