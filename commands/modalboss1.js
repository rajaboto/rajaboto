/*CMD
  command: modalboss1
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

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("money");
let amount = rnd.randomFloat(99999, 1000000) 
money.add(amount);

Bot.runCommand("/balance");
