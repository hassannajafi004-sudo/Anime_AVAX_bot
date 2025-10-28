   const TelegramBot = require('node-telegram-bot-api');
   const express = require('express');
   const bodyParser = require('body-parser');

   const app = express();
   const port = process.env.PORT || 3000;

   const token = '8303772304:AAHcQQaUcfr4MjOfztS6L8qIN19c4Z2CkJk';
   const bot = new TelegramBot(token, {polling: true});

   bot.onText(/\/start/, (msg) => {
       bot.sendMessage(msg.chat.id, "سلام! من ربات آپلودر شما هستم. لطفاً فایل خود را ارسال کنید.");
   });

   bot.on('document', (msg) => {
       const chatId = msg.chat.id;
       bot.sendMessage(chatId, "فایل شما با موفقیت آپلود شد!");
   });

   app.use(bodyParser.json());

   app.listen(port, () => {
       console.log(`Server is running on port ${port}`);
   });
   
