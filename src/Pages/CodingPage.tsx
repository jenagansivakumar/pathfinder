import React from 'react'
import Navbar from '../components/Navbar'
import ProgressTracker from '../components/ProgressTracker'
import { createTheme } from '@mui/material'
import ToDoForm from 'components/ToDoList/ToDoForm'



export default function Coding() {
  return (
    <>
    <Navbar />
    <div>Coding
      <ProgressTracker />
      <ToDoForm />
    </div>
    </>
  )
}
