const { WebSocket } = require("ws");

let wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState == ws.OPEN) {
        client.send(data.toString());
      }
    });
  });
});
console.log("Server run....");
