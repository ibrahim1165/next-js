import React from 'react'
import Navbar from '../Componets/Navbar'
import Image from 'next/image'
const about = () => {
  return (
    <div>
      <Navbar />
    <h1>This is  About</h1>
      <style jsx>
        {`
        h1{
          color:blue;
          text-align: center;
          font:700;
        }
        
        `}
      </style>
      
      </div>
  )
}

export default about