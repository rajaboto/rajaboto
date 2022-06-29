/*CMD
  command: /konfirmasi3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Bank Tujuan Anda*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("btt", data.message, "string"); 
Bot.runCommand('/Konfirmasi2');
