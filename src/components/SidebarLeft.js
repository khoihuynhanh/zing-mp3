import React from 'react'
import { NavLink } from 'react-router-dom'

import { sidebarMenu } from '../ultis/menu'
import logo from '../assets/logo-zing.png'

const notActiveStyle = 'py-2 px-[25px] font-bold text-[#32323d] text-[14px] flex items-center gap-4'
const activeStyle = 'py-2 px-[25px] font-bold text-[#b72479] text-[14px] flex items-center gap-4'

const SidebarLeft = () => {
  return (
    <div className='h-full flex flex-col bg-[#fbe6e6]'>

      <div className='w-full height-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <img src={logo} className='w-[120px] h-10' />
      </div>

      <div className='flex flex-col'>
        {sidebarMenu.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>

    </div>
  )
}

export default SidebarLeft