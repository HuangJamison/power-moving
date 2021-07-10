const express = require('express');
const linebot = require('linebot');
require('dotenv').config();
const router = express.Router();
console.log('env:', process.env)
const bot = linebot({
  channelId: process.env.LINEBOT_CHANNEL_ID,
  channelSecret: process.env.LINEBOT_CHANNEL_SECRET,
  channelAccessToken: process.env.LINEBOT_CHANNEL_ACCESS_TOKEN
});

bot.listen('/linewebhook', 8000, function () {
  console.log('bot is ready.');
});

bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
    console.log('reply done! data:', data);
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log('reply error:', error);
  });
});

router.get('/', function (req, res, next) {
  res.send('api ok??!');
});

module.exports = router;