import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'

export default function MusicPage() {

  const [image,setImage] = useState("")
  function handleImage(){
}

  return (
    <>
     <Navbar />
        <div>MusicPage</div>
        <input type='file' name='file' onChange={handleFile}/>
        <button onSubmit={ }> Submit</button>
    </>
  )
}
