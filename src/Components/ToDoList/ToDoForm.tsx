import { TextField, Container, Button } from '@mui/material'
import { log } from 'console'
import React from 'react'
import { useState } from 'react'

export default function ToDoForm() {
    const [todos, setTodos] = useState<string[]>([])
    const [input, setInput] = useState<string>("")
    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        console.log(e)
        setInput(e.target.value)
    }

    function handleAddItem(e: React.MouseEvent<HTMLElement>){
      if (input.trim() !== ""){
        setTodos([...todos, input])
        setInput("")
      }

    }

  return (
    <Container className='ToDoForm'>
        <TextField variant='outlined' value={input} onChange={onChange}  ></TextField>
        <Button onClick={handleAddItem}> Add Todo</Button>
    </Container>
  )
}
