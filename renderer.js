import { getCoinStatus } from "./coinDCX";

const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE

export function coinStatus(){
    console.log("It is working man?")
    getCoinStatus("SCINR")
}

document.getElementById("refresh").onclick = function () { alert('hello!'); };

  
