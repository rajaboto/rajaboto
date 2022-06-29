/*CMD
  command: /Konfirmasi2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nama Pengirim*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("name", data.message, "string"); 
Bot.runCommand('/prosesing');
