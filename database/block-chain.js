const Block = require('../block')
const Blockchain = require('../blockchain')
const genesisBlock = new Block()
const { log } = require('../helper')

const blockChain = new Blockchain(genesisBlock)

log('the block chain starts gere')(blockChain)
module.exports = blockChain