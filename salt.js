/* ----------------------------------------------- */
/* -----------------   SALT    ------------------- */
/* ----------------------------------------------- */

const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

const users = []; // 👈 users' credentials database

function signup(email, password) {
  const salt = randomBytes(16).toString("hex"); // generate random set of characters
  const hashedPassword = scryptSync(password, salt, 64).toString("hex"); // hashing (64 === hash.length)

  const user = { email, password: `${salt}:${hashedPassword}` }; // store user's credentials object with hashed-salted password
  users.push(user); // add it to database
  return user;
}

console.log(signup("test@mail.com", "helloworld"));

function login(email, password) {
  const user = users.find((input) => input.email === email); // look for email in database (since it's not crypted)

  const [salt, key] = user.password.split(":");
  

  const hashedBuffer = scryptSync(password, salt, 64); // use stored salt to decrypt stored password

  const keyBuffer = Buffer.from(key, "hex"); // second layer of security to prevent timeAttack
  const match = timingSafeEqual(hashedBuffer, keyBuffer); // comparing stored password with decrypted password

  return (match ? "✅ Good password !" : "❌ Wrong password!");
}

console.log(login("test@mail.com", "helloworld"));

/// theoretically can't decrypt message