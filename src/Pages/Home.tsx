import React from 'react'
import Navbar from '../Components/Navbar'
import ToDoForm from '../Components/ToDoList/ToDoForm'
import { Typography, colors } from '@mui/material'
import { WeatherApp } from '../Components/WeatherApp/WeatherApp'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Typography variant='h3'> WELCOME TO</Typography>
    <Typography variant='h1'> PATHFINDER</Typography>
    <WeatherApp/>
    </>
  )
}
