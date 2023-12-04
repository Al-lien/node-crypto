/* ----------------------------------------------- */
/* -----------------   HASH    ------------------- */
/* ----------------------------------------------- */

/* const { createHash } = require("crypto");

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
  // choose algo.update(input).chooseOutputFormat;
}

let password = "hi-mom!";
const hash1 = hash(password);

/// ... when client login we compare input password with database saved password

let inputPassword = "hi-mom!";
const hash2 = hash(inputPassword);

const match = hash1 === hash2;
console.log(match ? "✅ good password !" : "❌ wrong password!"); */

/// theoretically can't decrypt message