import Block from './Block'
import moment from 'moment'
import SHA256 from 'crypto-js/sha256'


export default class Blockchain {
    constructor() {
        this.blockchain = []
        this.blockchain.push(Block.genesisBlock())
    }

    get() {
        return this.blockchain
    }

    getLatestBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }

    calculateHash() {
        return SHA256(Math.random().toString(36).substring(2, 15)).toString()
    }

    generateNewBlock(data) {
        let hash = this.calculateHash()
        return new Block(this.getLatestBlock().index + 1, this.getLatestBlock().hash,
            moment.now(), data, hash).get()
    }

    addBlock(newBlock) {
        if (this.isValidBlock(newBlock)) {
            this.blockchain.push(newBlock)
        } else {
            throw 'Cant add invalid block';
        }
    }

    isValidBlock(block) {
        if (block.hash != this.getLatestBlock().hash && block.prevHash === this.getLatestBlock().hash) {
            return true
        } else {
            return false
        }
    }

    mine(data) {
        const newBlock = this.generateNewBlock(data);
        this.addBlock(newBlock);
    }

}