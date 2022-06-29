/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Balas

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "💻 *admin :* " + message + "\n\n Balas pesan -> /jawab";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Pesan Terkirim!")
