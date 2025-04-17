const http = require("node:http");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("node:path");
dotenv.config();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "127.0.0.1";

const createViewPage = (page) =>
  path.resolve(__dirname, "views", `${page}.html`);

const server = http.createServer((req, res) => {
  let filePath = "";
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      filePath = createViewPage("main");
      break;
    case "/authors":
      filePath = createViewPage("authors");
      break;
    case "/articles":
      filePath = createViewPage("articles");
      break;
    case "/dissertation":
      filePath = createViewPage("dissertation");
      break;
    case "/journals":
      filePath = createViewPage("journals");
      break;
    case "/literature":
      filePath = createViewPage("literature");
      break;
    case "/literature":
      filePath = createViewPage("literature");
      break;
    case "/universities":
      filePath = createViewPage("universities");
      break;

    default:
      filePath = createViewPage("404");
      res.statusCode = 404;
      break;
  }

  if (filePath !== "") {
    fs.readFile(filePath, (err, page) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("Sahifani oqishta hatolik");
      } else {
        res.write(page);
        res.end();
      }
    });
  }
});

//hardcode
server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started at: http://${HOST}:${PORT}`);
  }
});
