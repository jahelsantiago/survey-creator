import React from 'react'
import logo from "../assest/logo.gif"

type Props = {
}

export default function ThankYou({}: Props) {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center '>
        <img src = {logo} />
        <h1 className='text-8xl mt-10 text-primary-3'>Muchas Gracias</h1>
        <h2 className='text-4xl'>Por tu opinion</h2>
    </div>
  )
}