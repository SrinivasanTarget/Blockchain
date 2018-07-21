import Blockchain from './blockchain'
var SHA256 = require("crypto-js/sha256");

let blockchain = new Blockchain()
console.log(blockchain.getLatestBlock())
let Block = blockchain.generateNewBlock('Srinivasan Sekar')
console.log(blockchain.isValidBlock(Block))
blockchain.addBlock(Block)
console.log(blockchain.getLatestBlock())
blockchain.mine('Hehe Mine it')
console.log(blockchain.get())