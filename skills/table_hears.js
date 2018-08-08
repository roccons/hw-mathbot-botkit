module.exports = function (controller) {

    controller.hears(['hola', 'hi'], 'message_received', function (bot, message) {

        bot.createConversation(message, function (err, convo) {
    
            convo.addMessage({
                text: '¡Perfecto! Practiquemos la tabla del ' 
                    + controller.storage.get(message.user, function (err, user_data) {
                        console.log(user_data)
                    })
            }, 'table_question')

            convo.addMessage({
                text: 'Ps vete'
            }, 'finish')

            /**
             * 
             */
            convo.addQuestion('¿Cuál tabla quieres practicar?', [
                {
                    pattern: /del (\d+)/i,
                    callback: function (response, convo) {
                        controller.storage.users.save({
                            id: message.user,
                            tableNumber: response.text
                        })
                        convo.gotoThread('table_question');
                    }
                },
                {
                    pattern: /adios/i,
                    callback: function (response, convo) {
                        convo.gotoThread('finish');
                    }
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response')
                    }
                }
            ], {}, 'default');
    
            convo.activate();
        })
    })
}