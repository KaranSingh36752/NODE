const crypto = require("crypto");
console.log("hello world");
let a = 567336;
let b = 487674868;

//setTime
setTimeout(() => {
  console.log("calll mee asap!!!!!!!!!!!");
}, 0);
//pbkdf2- Password base key Deravtive Function
//sync function
const syncKey = crypto.pbkdf2Sync("password", "salt", 5000, 10, "sha512");
console.log(syncKey.toString("hex")); // '3745e48...08d59ae'
console.log("1st key is generated");


//Async function
crypto.pbkdf2("password", "salt", 5000, 30, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
  console.log("2nd key is gentrated");
});

//Hoisting of function
var c = multiplyFn(a, b);
console.log(c);

function multiplyFn(x, y) {
  const res = a * b;
  return res;
}
