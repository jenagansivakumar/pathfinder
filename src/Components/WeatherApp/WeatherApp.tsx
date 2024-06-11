import React from 'react'
import { Paper, TextField, Button, Typography } from '@mui/material'
import { useEffect } from 'react'

export const WeatherApp = () => {


  return (
    <>
        <Paper>
            <form>
            <Typography variant='h6'> City Name </Typography>
                <TextField fullWidth />
                <Button> Submit </Button>
            </form>
            <img src='' alt='weather icon' />
        </Paper>
    </>
  )
}
