const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;
const color=require('colors');
const wallet = Wallet.generate();

let privKey= keccak256(wallet.getPrivateKey());
let pubKey = keccak256(wallet.getPublicKey());

let wallet2= Wallet.fromPrivateKey(Buffer.from(privKey,'hex'));
let keystoreFile=wallet2.toV3String('nccu');
console.log(color.yellow('%s'),keystoreFile);
