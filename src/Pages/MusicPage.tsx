import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import { FormControl, FormLabel, Button } from '@mui/material'

export default function MusicPage() {

  const [image,setImage] = useState<File | null>(null)
  function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files && e.target.files.length > 0){
    setImage(e.target.files[0])}
}

  return (
    <>
     <Navbar />
        <div>MusicPage</div>
        <FormControl>
          <FormLabel> Add image</FormLabel>
          <input type='file' name='file' onChange={handleFile}/>
          <Button > Submit</Button>
        </FormControl>
    </>
  )
}
