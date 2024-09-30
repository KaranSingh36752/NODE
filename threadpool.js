const crypto = require("crypto")


crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("1- 1st key is gentrated");
  });

  crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("2 -2nd key is gentrated");
  });

  crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("3 -  3rd key is gentrated");
  });

  crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("4 -4th key is gentrated");
  });

  crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("5 - 5th key is gentrated");
  });

  crypto.pbkdf2("password", "salt", 500000, 30, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex")); // '3745e48...08d59ae'
    console.log("6 - 6th key is gentrated");
  });