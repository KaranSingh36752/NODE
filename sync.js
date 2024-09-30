const fs = require("fs");
const https = require("https");

console.log("Hello world");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("the api is fetched");
});

setTimeout(() => {
  console.log("the timeout ended");
}, 5000); 

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data", data);
});

var a = 109330940;
var b = 284029402;

const multiplyFn = (x, y) => {
  const res = a * b;
  return res;
};

var c = multiplyFn(a, b);

console.log("result is :", c);


// const fs = require("fs");
// const https = require("https");

// console.log("Hello world");

// // Promise to fetch API data using https.get
// const fetchApiData = () => {
//   return new Promise((resolve, reject) => {
//     https.get("https://dummyjson.com/products/1", (res) => {
//       let data = "";

//       // Listen for data chunks
//       res.on("data", (chunk) => {
//         data += chunk;
//       });

//       // End of response
//       res.on("end", () => {
//         if (res.statusCode >= 200 && res.statusCode < 300) {
//           resolve(JSON.parse(data)); // Parse and resolve the data
//         } else {
//           reject(`Request failed with status code: ${res.statusCode}`);
//         }
//       });
//     }).on("error", (err) => {
//       reject(`Request error: ${err.message}`);
//     });
//   });
// };

// // Call the API and handle the promise
// fetchApiData()
//   .then((data) => {
//     console.log("API Response:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching API:", error);
//   });

// // Timeout function
// setTimeout(() => {
//   console.log("the timeout ended");
// }, 5000);

// // File reading with fs.readFile
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     console.log("File data:", data);
//   }
// });

// // Multiplication function
// var a = 109330940;
// var b = 284029402;

// const multiplyFn = (x, y) => {
//   const res = a * b;
//   return res;
// };

// var c = multiplyFn(a, b);

// console.log("result is :", c);

