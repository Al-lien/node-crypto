/* ----------------------------------------------- */
/* --------------     Keypairs   ----------------- */
/* ----------------------------------------------- */

// Generate two keys (a private and a public one) mathematically linked

const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // the length of you key in bits
  publicKeyEncoding: {
    type: "spki", // recommended by Node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended by Node.js docs
    format: "pem",
    /* cipher: "aes-256-cbc", /// add passphrase to your private key for even more security
    passphrase: "top secret", */
  },
});

console.log(publicKey);
console.log(privateKey);

module.exports = { publicKey, privateKey };
