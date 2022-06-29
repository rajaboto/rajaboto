/*CMD
  command: /profil
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /lanjut
CMD*/

let res = Libs.ResourcesLib.userRes("money");
var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;
Bot.sendKeyboard('💲 SALDO,🏦 DEPOSIT\n📝 PREDIKSI,💬 LIVE CHAT', 'Selamat datang di RATU SYDNEY JITU ' + firstName + '\nIni adalah BOT sederhana yang akan membawa keberuntungan bagi anda!, Selamat Bergabung!');
