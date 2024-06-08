import React from 'react'
import Navbar from '../Components/Navbar'
import ProgresTracker from '../Components/ProgresTracker'
import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontSize: 100
  }
})

export default function Coding() {
  return (
    <>
    <Navbar />
    <div>Coding
      <ProgresTracker />
    </div>
    </>
  )
}
