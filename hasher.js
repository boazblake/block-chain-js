const sha256 = require('js-sha256')

const mining = block => {
    let hash = sha256(block.key)
    while(!hash.startsWith("megan")) {
        block.nonce += 1
        hash = sha256(block.key)
    }

    return hash
}

module.exports = mining