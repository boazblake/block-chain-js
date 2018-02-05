const express = require('express')
const app = express()
const bdyParser = require('body-parser')
const {log} = require('./helper')

const blockChainApi = require('./block_chain_api')

app.use(bdyParser.json())

app.get('/', function(req,res){
    res.send("api is running")
})

app.post('/add_transactions', function(req,res) {
    const body = req.body
    const add_to_coll = blockChainApi.handleTransaction(body)
    res.end('transaction added to collection successfully')
})

app.get('/view_transactions', function(req,res) {
    res.send({transactions: blockChainApi.transactions.coll})
})

app.get('/mine', function(req,res){
    blockChainApi.toMineBlocks()
    res.end('Transactions are being mined and should be ready soon at /blockchain')
})

app.get('/blockchain', function(req,res) {    
    res.json(blockChainApi.blockChain.chain)
})


app.listen(3000, () =>{
    console.log("server is listening on port 3000")})
    

module.exports = express()