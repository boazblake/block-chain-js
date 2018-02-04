const Block = require('./block')
const Transaction = require('./transaction')
const {log} = require('./helper')
const genHash = require('./hasher')
const {prop} = require('ramda')

class Blockchain {

  constructor(genesisBlock) {
    this.blockIndex = 0
    this.prevHash = ''
    this.chain = []
    this.addGenBlock(genesisBlock)
  }

  addGenBlock(block) {
    log('gen block')(block)
    block.hash = genHash(block)
    delete block.transactions
    delete block.prevHash
    delete block.nonce
    this.prevHash = block.hash
    this.blockIndex ++
    return this.chain.push(block)
  }

  makeNextBlock(transactions) {
    const block = new Block()
    block.transactions = transactions
    block.hash = genHash(block)
    block.prevHash = this.prevHash
    this.prevHash = block.hash
    block.index = this.blockIndex
    this.blockIndex ++
    return this.chain.push(block)
  }


}


module.exports = Blockchain