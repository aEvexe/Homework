// const url = require("url");

// const urlData = {
//   protocol: "https",
//   hostname: "mywebsite.com",
//   pathname: "/blog/article",
//   query: {
//     id: 45,
//     author: "Ali",
//     lang: "en",
//   },
// };


// urlData.query.lang = "uz";

// urlData.query.view = "mobile";


// const fullUrl = new url.URL(`${urlData.protocol}://${urlData.hostname}${urlData.pathname}`);
// Object.entries(urlData.query).forEach(([key, value]) => {
//   fullUrl.searchParams.set(key, value);
// });

// console.log(fullUrl.toString()); 


//2
// const os = require("os");

// console.log("CPU yadrolari soni:", os.cpus().length);

// os.cpus().forEach((cpu, index) => {
//   console.log(`Yadro ${index + 1}:`);
//   console.log("  Model:", cpu.model);
//   console.log("  Tezlik (MHz):", cpu.speed);
// });


//3
// const path = require("path");

// const root = "/home/user/";
// const subfolder = "projects/myapp/";
// const filename = "server.js";

// const fullPath = path.join(root, subfolder, filename);
// console.log("To‘liq yo‘l:", fullPath); 


//4
// const path = require("path");

// const paths = [
//   "C://Users//Admin//Desktop//project//..//index.js",
//   "/home/user/docs/../images/photo.png",
//   "./folder/subfolder/../../script.js"
// ];

// paths.forEach((p) => {
//   const normalized = path.normalize(p);
//   let explanation = "";

//   if (normalized.includes("index.js")) {
//     explanation = "index.js – asosiy katalogda";
//   } else if (normalized.includes("photo.png")) {
//     explanation = "photo.png – images papkasi ichida";
//   } else if (normalized.includes("script.js")) {
//     explanation = "script.js – folder ichidagi yuqori darajadagi fayl";
//   }

//   console.log(`${normalized} => ${explanation}`);
// });


//5
// const path = require("path");

// const files = [
//   "report.docx", "notes.txt", "data.json",
//   "README.md", "script.js", "todo.txt"
// ];

// const filtered = files.filter(file => {
//   const ext = path.extname(file);
//   return ext === ".txt" || ext === ".md";
// });

// console.log(filtered); 


//3
