const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find()
    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  })

  try {
    const savedTodo = await newTodo.save()
    res.status(201).json(savedTodo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update a todo
router.patch('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.json(updatedTodo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const removedTodo = await Todo.findByIdAndRemove(req.params.id)
    res.json(removedTodo)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
