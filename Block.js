import moment from 'moment'

export default class Block {
    constructor(index, prevHash, timestamp, data, hash) {
        this.block = {
            "index": index,
            "prevHash": prevHash,
            "timestamp": timestamp,
            "data": data,
            "hash": hash
        }
    }

    get() {
        return this.block
    }

    static genesisBlock() {
        return this.block = {
            "index": 0,
            "prevHash": 0,
            "timestamp": moment.now(),
            "data": 'Genesis Block',
            "hash": '5df82936cbf0864be4b7ba801bee392457fde9e4'
        }
    }

}