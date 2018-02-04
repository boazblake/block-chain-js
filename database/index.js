const blockChain = require('./block-chain')
const Transactions = require('./transaction-collection')
const MinedBlocks = require('./mined-blocks')

const theblockchain = blockChain

const Database = _ =>
    ({ transactions: () => new Transactions(),
        mined_blocks: () => new MinedBlocks(),
        block_chain: () => theblockchain
    })


module.exports = Database()