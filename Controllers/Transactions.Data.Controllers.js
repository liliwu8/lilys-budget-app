const express = require('express')
const transactions = express.Router()
const transactionsArray = require('../Module/Transactions.Data')

//index
transactions.get('/', (req, res) => {
  res.json(transactionsArray)
})

//Show
transactions.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (transactionsArray[id]) {
    res.json(transactionsArray[id])
  } else {
    res.status(404).send('Oops! Wrong id.')
  }
})

//Create
transactions.post('/', (req, res) => {
  transactionsArray.push(req.body)
  res.json(transactionsArray[transactionsArray.length - 1])
})

//Update
transactions.put('/:id', (req, res) => {
  const { id } = req.params
  const newData = req.body
  transactionsArray[id] = newData
  res.send(transactionsArray[id])
})

//Delete
transactions.delete('/:id', (req, res) => {
  const { id } = req.params
  let transactionsDelete = transactionsArray.splice(id, 1)
  res.send(transactionsDelete)
})

module.exports = transactions
