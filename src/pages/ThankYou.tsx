import {useEffect, useRef} from 'react'
import logo from "../assest/logo.gif"
import WallPaper from '../components/WallPaper'
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
    <WallPaper>
      <div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
          <h1 className='text-6xl font-extrabold mt-10 text-primary-gray'>
            Muchas gracias <br/>
            por tu <span className='text-primary-blue'>opinion</span>
          </h1>
      </div>
    </WallPaper>
  )
}