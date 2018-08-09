module.exports = controller => {

  controller.hears('quick replies','message_received', (bot, message) => {

    bot.reply(message, {
        text: 'Look, quick replies!',
        quick_replies: [
            {
                title: 'Hello',
                payload: 'hello'
            },
            {
                title: 'Test',
                payload: 'test'
            },
        ]
      },() => {})


    })
}
