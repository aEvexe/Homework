// 1
// const fs = require('fs');
// const path = './files/fresh.txt';

// function createFile() {
//   try {
//     if (fs.existsSync(path)) {
//       throw new Error('FS operation failed');
//     }
//     fs.writeFileSync(path, 'I am fresh and young');
//     console.log('File created successfully!');
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// createFile();

//2
// const fs = require('fs');
// const path = require('path');

// function copyDirectory() {
//   const sourceDir = './files';
//   const destDir = './files_copy';

//   try {
//     if (!fs.existsSync(sourceDir)) {
//       throw new Error('FS operation failed');
//     }
//     if (fs.existsSync(destDir)) {
//       throw new Error('FS operation failed');
//     }

//     fs.mkdirSync(destDir); 
//     const files = fs.readdirSync(sourceDir);

//     files.forEach(file => {
//       const currentFile = path.join(sourceDir, file);
//       const copyFile = path.join(destDir, file);
//       fs.copyFileSync(currentFile, copyFile);
//     });

//     console.log('Files copied successfully!');
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// copyDirectory();

//3
// const fs = require('fs');
// const path = require('path');

// function renameFile() {
//   const oldPath = './files/wrongFilename.txt';
//   const newPath = './files/properFilename.md';

//   try {
//     if (!fs.existsSync(oldPath)) {
//       throw new Error('FS operation failed');
//     }
//     if (fs.existsSync(newPath)) {
//       throw new Error('FS operation failed');
//     }
    
//     fs.renameSync(oldPath, newPath);
//     console.log('File renamed successfully!');
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// renameFile();

//4
// const fs = require('fs');
// const path = './files/fileToRemove.txt';

// function deleteFile() {
//   try {
//     if (!fs.existsSync(path)) {
//       throw new Error('FS operation failed');
//     }

//     fs.unlinkSync(path);
//     console.log('File deleted successfully!');
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// deleteFile();

//5
// const fs = require('fs');

// function listFiles() {
//   const dirPath = './files';

//   try {
//     if (!fs.existsSync(dirPath)) {
//       throw new Error('FS operation failed');
//     }

//     const files = fs.readdirSync(dirPath);
//     console.log('Files in the directory:', files);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// listFiles();

//6
// const fs = require('fs');
// const path = './files/fileToRead.txt';

// function readFile() {
//   try {
//     if (!fs.existsSync(path)) {
//       throw new Error('FS operation failed');
//     }

//     const content = fs.readFileSync(path, 'utf-8');
//     console.log('File content:', content);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// readFile();

//7
// const fs = require('fs');

// function writeNumbers() {
//   const filePath = './son.txt';
//   const numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));

//   try {
//     const data = numbers.join('\n');
//     fs.writeFileSync(filePath, data);
//     console.log('Numbers written to file successfully!');
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// writeNumbers();

//8
// const fs = require('fs');

// function readNumbers() {
//   const filePath = './son.txt';

//   try {
//     if (!fs.existsSync(filePath)) {
//       throw new Error('FS operation failed');
//     }

//     const data = fs.readFileSync(filePath, 'utf-8');
//     const numbers = data.split('\n').map(Number);
//     console.log('Numbers read from file:', numbers);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// readNumbers();





