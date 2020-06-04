const TelegramBot = require('node-telegram-bot-api');
const token = '1155432170:AAFAaftEA02cSZpQC29XsEyWtMXsHUN_qZ8';
const bot = new TelegramBot(token, {polling:true});
const https = require('https');
bot.on('polling_error', function(error){
    console.log(error);
});
bot.onText(/^\/start/, function(msg){
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name; 
    bot.sendMessage(chatId, "Bienvenido a mi bot " + nameUser);
});
bot.onText(/^\/picture/, function(msg) {
https.get('https://api.nasa.gov/planetary/apod?api_key=HRSo5U4ukaIGB6lr31JYhIMvghWpM8PlcLfafEPd', (resp) => {
  let data = '';
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
  	var url =JSON.parse(data).url;
	bot.sendMessage(msg.chat.id, "[📷] Imagen del dia: " + url,{parse_mode : "Markdown"});
    bot.sendMessage(msg.chat.id,"Titulo:"+JSON.parse(data).title);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  console.log(msg);
  var userId = msg.from.id;
  var url = msg.text.substring(8).trim();
});



