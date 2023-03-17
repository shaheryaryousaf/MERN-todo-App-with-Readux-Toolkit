import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { fetchTodos } from '../features/todosSlice'
import { Container } from 'react-bootstrap'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <Container>
      <h1 className='mt-4 mb-4'>Todo List</h1>
      <AddTodo />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </Container>
  )
}

export default TodoList
