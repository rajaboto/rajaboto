/*CMD
  command: /loginadm
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = "Access denied. Password is: `123` /login"

if (message == "123") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "You admin now. Please wait messages from users"
}

Bot.sendMessage(msg)
