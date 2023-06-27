import React from 'react'

import icons from '../ultis/icons'
import { Search } from './'

const { HiArrowNarrowRight, HiArrowNarrowLeft } = icons 

const Header = () => {
  return (
    <div className='flex justify-between w-full items-center'>

        <div className='flex gap-6 w-full items-center'>
            
            <div className='flex items-center text-[#bda8ab] gap-6'>
                <span><HiArrowNarrowLeft size={24}  /></span>
                <span><HiArrowNarrowRight size={24}  /></span>
            </div>
    
            <div className='w-1/2'>
                <Search />
            </div>
    
        </div>
    
        <div>
            login
        </div>

    </div>
  )
}

export default Header