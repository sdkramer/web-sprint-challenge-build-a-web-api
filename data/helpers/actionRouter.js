const express = require('express');
const actions = require('./actionModel')

const router = express.Router();


//get all actions
router.get('/actions', async (req,res, next) => {
  try {
const data = await actions.get()
res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

//get action by id
router.get('/actions/:id', async (req, res, next) => {
  try {
const action = await actions.get(req.params.id)
res.status(200).json(action)
  } catch (err) {
    next(err)
  }
})

//add an action
router.post('/actions', async (req, res, next) => {
  try {
const action = await actions.insert(req.body)
res.status(201).json(action)
  } catch (err) {
    next(err)
  }
})

//update an action
router.put('/actions/:id', async (req, res, next) => {
  try {
const action = await actions.update(req.params.id, req.body)
res.status(201).json(action)
  } catch (err) {
    next(err)
  }
})

//delete an action
router.delete('/actions/:id', async (req, res, next) => {
  try {
actions.remove(req.params.id)
res.status(200).json({
  message: `action ${req.params.id} deleted`,
})
  } catch (err) {
    next(err)
  }
})


module.exports = router