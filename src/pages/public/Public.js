import React from 'react'
import { Outlet } from 'react-router-dom'

import { Player, SidebarLeft, SidebarRight } from '../../components/index'

const Public = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-[#f9dbdb]'>

      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] min-h-screen flex-none '>
          <SidebarLeft />
        </div>

        <div className='flex-auto'>
          <Outlet />
        </div>

        <div className='w-[330px] hidden 1600:flex flex-none animate-slide-left'>
          <SidebarRight />
        </div>
      </div>

      <div className='flex-none h-[90px] fixed bottom-0 left-0 right-0'>
        <Player />
      </div>

    </div>
  )
}

export default Public