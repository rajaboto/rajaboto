/*CMD
  command: 💲 SALDO
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");
Bot.sendMessage('🌠 *Sisa Saldo* Rp' + res.value().toFixed(0) +',-\n_Gunakan saldo anda untuk mendapatkan prediksi jitu!_');
