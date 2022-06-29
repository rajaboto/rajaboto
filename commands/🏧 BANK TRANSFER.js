/*CMD
  command: 🏧 BANK TRANSFER
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Input Nominal Deposit Yang Ingin di Transfer*
_mininal Rp10000,-_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("deposit", data.message, "string");
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("❌ *Format Salah, Ex : 10000*")
  return
}
Bot.runCommand('/pembayaran2');
