import React from 'react'
import { Box, Typography } from '@mui/material'
import { createTheme } from '@mui/material'

const theme = createTheme({
    typography: {
      fontSize: 100
    }
  })
export default function ProgresTracker() {
  return (
    <>
    <Box>
        <Typography> 🔥 </Typography>
    </Box>
    </>
  )
}
