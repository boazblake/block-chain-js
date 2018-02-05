const Block = require('../block')
const Blockchain = require('../blockchain')
const config = require('../app')
const { log } = require('../helper')

const genesisBlock = new Block()
log('~~Genesis Block Successfully created~~')(genesisBlock)

const blockChain = new Blockchain(genesisBlock, config.nonce)
log('BLOCK CHAIN')(blockChain)


module.exports = blockChain