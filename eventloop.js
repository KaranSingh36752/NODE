const fs = require('fs');
const https = require('https');

// Process next tick
process.nextTick(() => {
  console.log("NextTick");
});
console.log("Start");

// Set a timeout
setTimeout(() => {
  console.log("Timeout");
}, 0);

// Set an immediate
setImmediate(() => {
  console.log("Immediate");
});

// Promise resolution
Promise.resolve().then(() => {
  console.log("Promise");
});


// process.nextTick(() => {
//     console.log("NextTick2");
//   });

// Simulate an I/O operation using https.get
https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = '';
  
  // This callback is part of the I/O operation and runs in the Poll phase
  res.on('data', (chunk) => {
    data += chunk;
});

  res.on('end', () => {
      console.log("I/O operation complete (https.get)");
    });
});

// Simulate file reading using fs.readFile
fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) {
        console.error("File read error:", err);
        return;
    }
    console.log("File read complete");
});

console.log("End");
 
// process.nextTick(() => {
//     console.log("NextTick3");
//   });

// Promise.resolve().then(() => {
//     console.log("Promise2");
//   });
  
// fs.readFile(__filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error("File read error:", err);
//         return;
//     }
//     console.log("File read complete2222");
// });