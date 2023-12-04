/* ----------------------------------------------- */
/* -----------------   HMAC    ------------------- */
/* ----------------------------------------------- */

// Hash that also required a password (cf Json Web Token)
// Wich means only person with this password can create the same hash

const { createHmac } = require("crypto");

const key = "super-secret!";
const message = "boo 👻";

const hmac = createHmac("sha256", key).update(message).digest("hex");

console.log(hmac);

const key2 = "super-super-secret!";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac2);

/// theoretically can't decrypt message