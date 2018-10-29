const Wallet = require('ethereumjs-wallet');
const keccak256=require('js-sha3').keccak256;
let wallet=Wallet.generate();

console.log(`privKey : ${keccak256(wallet.getPrivateKey())}`);
console.log(`pubKey : ${keccak256(wallet.getPublicKey())}`);
//console.log(`account:${keccak256(wallet.getPublicKey())}`)
