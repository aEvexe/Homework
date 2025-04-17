const ws = new WebSocket("ws://localhost:8000");
const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

const randomId = () => {
  return Math.random().toString(36).substring(2, 14);
};

let userId = randomId();
let allMessage = "";
ws.onmessage = (event) => {
  let message = JSON.parse(event.data);
  allMessage += `
        <div class="${userId == message.id ? "right" : "left"}">
        ${
          userId == message.id
            ? `
                 <div class="avatar">A</div>
                 <div class="text">${message.message}</div>
                `
            : `
               <div class="avatar">J</div> 
               <div class="text">${message.message}</div>
                `
        }    
        </div>
    `;
  chat.innerHTML = allMessage;
};

btn.onclick = () => {
  let value = msg.value;
  ws.send(JSON.stringify({ id: userId, message: value }));
  msg.value = "";
};
