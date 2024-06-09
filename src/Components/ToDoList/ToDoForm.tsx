import { TextField, Container } from '@mui/material'
import { log } from 'console'
import React from 'react'
import { useState } from 'react'

export default function ToDoForm() {
    const [value, setValue] = useState("")
    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        console.log(e)
        setValue(e.target.value)
    }
  return (
    <Container className='ToDoForm'>
        <TextField variant='outlined' value={value}  ></TextField>
    </Container>
  )
}
