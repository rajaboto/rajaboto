/*CMD
  command: 🏦 DEPOSIT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🏛️ deposit
CMD*/

User.setProperty("bank", data.message, "string");
Bot.sendKeyboard('🏧 DANA,🏧 BANK TRANSFER', 'Pilih salah satu alat pembayaran dibawah ini');
