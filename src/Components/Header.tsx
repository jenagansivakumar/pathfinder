import React from 'react'
import { AppBar } from '@mui/material'

export default function Header() {

  const pages: string[] = ["Home", "Music", "Coding", "Languages", "Fitness"]
  return (
  <div>
    {pages.map((page)=> <h1> {page}</h1>)}
  </div>
  )
}
