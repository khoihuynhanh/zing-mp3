import React from 'react'

import icons from '../ultis/icons'

const { FiSearch } = icons

const Search = () => {
  return (
    <div className='w-full flex items-center bg-[#ecd0d0] rounded-[20px] text-gray-500'>
        <span className='h-10 pl-4 flex items-center justify-center'>
            <FiSearch size={22} />
        </span>
       
        <input
            type='text'
            className='outline-none bg-[#ecd0d0] px-4 py-2 rounded-r-[20px] h-10 w-full'
            placeholder='Search ...'
        />
    </div>
  )
}

export default Search