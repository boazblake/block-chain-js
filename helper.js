const sha256 = require('js-sha256')

const log = msg => x => {
    console.log(msg, x)
    return x
}

const genHash = block => {
    let hash = sha256(block.key)

    while(!hash.startsWith("000")) {
      block.nonce += 1
      return hash = sha256(block.key)
    }
}

Helpers = {
    log,
    genHash,
}


module.exports = Helpers