import {useEffect, useRef} from 'react'
import logo from "../assest/logo.gif"
import { uploadAnswer } from '../firebase/services'

type Props = {
  answers?: any[]
}

export default function ThankYou({answers = []}: Props) {
  const firstRender = useRef(false)

  useEffect(() => {
    if(firstRender.current === false){
      uploadAnswer(answers)
      firstRender.current = true
    }
  }, [])
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
        <img src = {logo} />
        <h1 className='text-8xl mt-10 text-primary-3'>Muchas Gracias</h1>
        <h2 className='text-4xl'>Por tu opinion</h2>
    </div>
  )
}