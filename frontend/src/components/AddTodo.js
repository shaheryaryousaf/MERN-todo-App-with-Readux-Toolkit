import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todosSlice'
import { Form, Button, Row, Col } from 'react-bootstrap'

const AddTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return

    dispatch(addTodo(text))
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a new task' />
        </Col>
        <Col xs='auto'>
          <Button type='submit' variant='primary'>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default AddTodo
