/*CMD
  command: 🇦🇺 SYDNEY JITU
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
    let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
    
    if(res.have(2500)){
       if( res.exchangeTo(bank_deposit, { remove_amount: 2500, add_amount: 2500  }) ){
         
         let secs_in_5minutes = 1 * 60 * 5;
        
         if(!bank_deposit.growth.isEnabled()){
           // if is not growth enablebled yet
           bank_deposit.growth.addCompoundInterest({percent: 0.005, interval: secs_in_5minutes });
         }
         Bot.sendMessage("Prediksi");
       }
     }else{
        Bot.sendMessage("GAGAL, saldo  tidak cukup!");
     }
