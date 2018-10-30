const Wallet = require('ethereumjs-wallet');
const keccak256= require('js-sha3').keccak256;
const wallet = Wallet.generate();

let public_key_hash=keccak256(wallet.getPublicKey());
console.log(`0x${public_key_hash.substring(public_key_hash.length-40,public_key_hash.length)}`);
