/* ----------------------------------------------- */
/* -------------Asymetric encryption-------------- */
/* ----------------------------------------------- */

// https is using this encryption (as well as bitcoin, etc...)

// Alice and Bob exhange their public keys.
// Alice encrypt her message with bob public key and send it to him.
// Bob use his private key to decrypt the message. (Not even Alice can't decrypt it).

// Switch Alice by Browser and Bob by server.

const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypairs");

const message = "Je suis bieeeeeeeng ! 🍔";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));

// But how can Alice tell that this is really Bob's public key ? See signing.js