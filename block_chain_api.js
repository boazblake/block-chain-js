const Database = require('./database/index')
const transactions = Database.transactions()
const mined_blocks = Database.mined_blocks()
const blockChain = Database.block_chain()

const {isEmpty} = require('ramda')

const handleTransaction = (transaction) => {
    return transactions.coll.push(transaction)
}

const toMineBlocks = () => {
    return isEmpty(transactions.coll)
        ? console.error('no transactions to mine')
        : mineTheBlocks(transactions.coll)
}

const mineTheBlocks = transactions_to_be_mined => {
    blockChain.makeNextBlock(transactions_to_be_mined)
    return transactions.coll = []
}

const blockChainApi = {
    handleTransaction,
    transactions,
    mined_blocks,
    toMineBlocks,
    blockChain
}


module.exports = blockChainApi