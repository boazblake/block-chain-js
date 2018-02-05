const { log } =require('./helper')

const toNextBlock = dto => transactions => prevHash => blockIndex => hash => {
    const block = {
        index: blockIndex,
        hash: hash,
        prevHash: prevHash,
        transactions: transactions,
    }
    return block
}

const genHash = sha256 => block => nonce => {
    let hash = sha256(block.key)
    while(!hash.startsWith(nonce)) {
        // log('hash ==>')(hash)
        block.nonce += 1
        hash = sha256(block.key)
    }

    return hash
}

const getNonce = nonce => transactions => {
    log('transactions')(transactions)
    return nonce
}

const model = {
    toNextBlock,
    genHash,
    getNonce
}

module.exports = model