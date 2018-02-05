const Block = require('./block')
const sha256 = require('js-sha256')
const { toNextBlock, genHash, getNonce } = require('./block-chain-model')
const { log } = require('./helper')
const { clone, length  } = require('ramda')

class Blockchain {
  constructor(genesisBlock, nonce ) {
    this.chain = []
    this.prevHash = ''
    this.nonce = nonce
    this.genesisBlock = genesisBlock
    this.addGenBlock(this.genesisBlock)
  }

  addGenBlock(block) {
    block.hash = genHash(sha256)(block)(this.nonce)
    this.prevHash = clone(block.hash)
    delete block.transactions
    delete block.prevHash
    return this.chain.push(block)
  }

  makeNextBlock(transactions) {
    const cons = new Block()
    const nonce_as_a_factor_of = getNonce(this.nonce)(transactions)
    const block =
      toNextBlock(cons)(sha256(transactions))(this.prevHash)(length(this.chain))(genHash(sha256)(cons)(nonce_as_a_factor_of))
    this.prevHash = clone(block.hash)
    return this.chain.push(block)
  }

}


module.exports = Blockchain