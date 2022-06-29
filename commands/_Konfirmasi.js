/*CMD
  command: /Konfirmasi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nominal Transferan Anda*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("jumlah", data.message, "string"); 
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("❌ *Deposit Tidak di Kenal!*")
  return
}
Bot.runCommand('/konfirmasi3');
