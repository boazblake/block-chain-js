const Transaction = require('./transaction')
const Database = require('./database/index')
const transactions = Database.transactions()
const mined_blocks = Database.mined_blocks()
const blockChain = Database.block_chain()

const {head, isEmpty, map, prop} = require('ramda')

const {log} = require('./helper')

const handleTransaction = ({from, to, amount}) => {
    return transactions.coll.push({from, to, amount})
}

const toMineBlocks = () => {
    log('about to mine')(transactions.coll)
    isEmpty(transactions.coll)
        ? [{error:'no transactions to mine'}]
        : mineTheBlocks(transactions.coll)
}

const mineTheBlocks = transactions_to_be_mined => {
    blockChainApi.blockChain.makeNextBlock(transactions_to_be_mined)
    return transactions.coll = []
}



const blockChainApi = {
    handleTransaction,
    transactions,
    mined_blocks,
    toMineBlocks,
    blockChain,
}


module.exports = blockChainApi