// frontend/src/features/todosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:5000/api/todos')
  return response.data
})

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  await axios.post('http://localhost:5000/api/todos', { text })
  return text
})

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async ({ id, completed }) => {
  await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed })
  return { id, completed }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`http://localhost:5000/api/todos/${id}`)
  return id
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.push({ text: action.payload, completed: false })
    })
    builder.addCase(toggleTodo.fulfilled, (state, action) => {
      const todo = state.find((todo) => todo._id === action.payload.id)
      if (todo) {
        todo.completed = action.payload.completed
      }
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      return state.filter((todo) => todo._id !== action.payload)
    })
  },
})

export default todosSlice.reducer
