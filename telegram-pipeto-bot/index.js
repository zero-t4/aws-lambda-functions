const Telegram = require('telegraf').Telegram;

const telegram = new Telegram(process.env.BOT_TOKEN);

exports.handler = async (event) => {
  await telegram.sendMessage(
    process.env.CHAT_ID,
    event.message,
  );

  return {
    statusCode: 200,
    body: JSON.stringify('Message send: ' + event.message),
  };
};
