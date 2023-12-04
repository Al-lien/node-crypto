/* ----------------------------------------------- */
/* --------------Symetric encryption-------------- */
/* ----------------------------------------------- */

// http is using this encryption
// It's like sending a lock chest with it's key at the same time...

const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

const message = "I like icecream 🍦"; // what we want to encrypt
const key = randomBytes(32); // random key
const iv = randomBytes(16); // random initial vector (iv)

const cipher = createCipheriv("aes256", key, iv); // create cipher

/// encrypt
const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");
// 👆 cipher can only be used once

/// decrypt
const decipher = createDecipheriv("aes256", key, iv); // create decipher with same key && iv
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");

console.log(
  "Message :",
  message,
  "encrypted :",
  encryptedMessage,
  "decrypted :",
  decryptedMessage
);


/// Problem : same key is used by the two pairs communicating