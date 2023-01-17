import React, { Component } from 'react'
import anticonveptivo from "../assest/pildoras-anticonceptivas.png"
import Button from '../components/Button'

type props = {
  nextPage: () => void
}
type state = {}

export default class Landing extends Component<props, state> {
  render() {
    return (
      <main className='w-screen h-screen bg-white flex justify-center content-center flex-col'>
        <div className='flex flex-col items-center justify-between  gap-10'>
          <h1 className='text-5xl font-bold text-gray-800 uppercase text-center'>Campaña de escacez de anticonceptivos</h1>
          <img src={anticonveptivo} alt="anticonceptivo" className="w-80 h-80" />
          <Button onClick={this.props.nextPage}>Responder</Button>
        </div>
      </main>
    )
  }
}
