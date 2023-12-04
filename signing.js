
/* ----------------------------------------------- */
/* ------------         SIGNING      -------------- */
/* ----------------------------------------------- */

// Before,
// 💌 You asked the sender of a message to sign it in blood 🩸 to be sure it came from him.
// and to add a seal on it, that if broken, indicate it has been opened and tampered.

// With digital signing, Alice use her PRIVATE KEY (the blood 🩸) to encrypt the message, and send it to Bob.
// EVERYONE can decrypt it with Alice's PUBLIC KEY. What matters, is to be sure that this message came from Alice only.

// Alice can also share her KEY's FINGERPRINT (more blood 🩸). 
// Like this Bob can check if the message was in fact encrypt with Alice private key.

// If someone interceipt this message, decrypt it, change the message and send it to Bob. 
// Bob wouldn't be able to decrypt it with Alice's public key,
// The fingerprint wouldn't match && so he knows it doesn't come from Alice.

const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypairs")

const message = "This message must be signed 🔏";

// Sign
const signer = createSign("rsa-sha256");
signer.update(message);
const signature = signer.sign(privateKey, "hex");

// Verify
const verifier = createVerify("rsa-sha256");
verifier.update(message);
const isVerified = verifier.verify(publicKey, signature, "hex");
/// 👆 if signature forged or message changed, verifier will fail.

console.log(signature);
console.log(isVerified);