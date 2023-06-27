import React from 'react'
import { Header, Slider } from '../../components'

const Home = () => {

  return (
    <div className='overflow-y-auto'>

      <div className='h-[70px] px-[60px] flex items-center'>
        <Header />
      </div>

      <div className='px-[60px] pt-8'>
        <Slider />
      </div>

    </div>
  )
}

export default Home