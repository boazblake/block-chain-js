const Database = require('./database/index')
const transactions = Database.transactions()
const mined_blocks = Database.mined_blocks()
const blockChain = Database.block_chain()
const { log } = require('./helper')
const {isEmpty} = require('ramda')

const handleTransaction = (transaction) => {
    return transactions.coll.push(transaction)
}

const toMineBlocks = () => {
    // TODO: to Task?
    new Task( (rej, res) => {
        isEmpty(transactions.coll)
            ? (['no transactions to mine'])
            : mineTheBlocks(transactions.coll)
        })
    return 
        
}

const mineTheBlocks = transactions_to_be_mined => {
    blockChain.makeNextBlock(transactions_to_be_mined)
    clearTransactions()
    return ['transactions successfully mined']
}

const clearTransactions = () =>
 transactions.coll = []

const blockChainApi = {
    handleTransaction,
    transactions,
    mined_blocks,
    toMineBlocks,
    blockChain
}


module.exports = blockChainApi