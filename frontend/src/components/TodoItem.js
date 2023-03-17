import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todosSlice'
import { ListGroup, Button, Form } from 'react-bootstrap'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo._id, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id))
  }

  return (
    <ListGroup.Item className='d-flex align-items-center mt-2'>
      <Form.Check type='checkbox' checked={todo.completed} onChange={handleToggle} className='me-3' />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <Button onClick={handleDelete} className='ms-auto' variant='danger' size='sm'>
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default TodoItem
