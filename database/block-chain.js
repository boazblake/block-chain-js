const Block = require('../block')
const Blockchain = require('../blockchain')
const { log } = require('../helper')

const genesisBlock = new Block()
log('~~Genesis Block Successfully created~~')(genesisBlock)

const nonce = "000"

const blockChain = new Blockchain(genesisBlock, nonce)

log('BLOCK CHAIN')(blockChain)
module.exports = blockChain