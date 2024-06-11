import React from 'react'
import Navbar from '../components/Navbar'
import ToDoForm from '../components/ToDoList/ToDoForm'
import { Typography, colors } from '@mui/material'
import { WeatherApp } from '../components/WeatherApp/WeatherApp'


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
