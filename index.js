const CryptoJS = require("crypto-js");

const key = 'secret key 123'

// Encrypt
function encrypt(text) {
  let ciphertext = CryptoJS.AES.encrypt(text, key).toString();
  return ciphertext
}

const p1 = encrypt('hello crypto')
console.log(p1)

// Decrypt
function decrypt(text) {
  let bytes = CryptoJS.AES.decrypt(text, key);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText
}

const p2 = decrypt('U2FsdGVkX18tYbCXN5i0UUTUG7tGiz58mrPfNDgLOAM=')
console.log(p2)
