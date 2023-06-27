import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'

const { 
  AiFillHeart,
  AiOutlineHeart,
  BsThreeDots,
  BsRepeat,
  MdSkipNext, 
  MdSkipPrevious,
  BsPlayCircle,
  BsShuffle,
  BsPauseCircle 
} = icons

const Player = () => {
  const audioEl = new Audio()

  const { currentSongID, isPlaying } = useSelector(state => state.music)

  const [songInfo, setSongInfo] = useState(null)
  const [source, setSource] = useState(null)
  // const [isPlaying, setIsPlaying] = useState(false)
  console.log(isPlaying);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(currentSongID),
        apis.getDetailSong(currentSongID)
      ])
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data)
      }
      if (res1.data.err === 0) {
        setSource(res2.data.data['128'])
      }
    }

    fetchDetailSong()
  }, [currentSongID])

  useEffect(() => {
    audioEl.play()
  }, [currentSongID])

  const handlePlayMusic = () => {
    // setIsPlaying(prev => !prev)
  }
  

  return (
    <div className='bg-[#f9c6c5] px-5 h-full flex'>
        
        <div className='w-[30%] flex-auto flex items-center gap-3'>
            <img src={songInfo?.thumbnail} className='w-16 h-16 object-cover rounded-md flex' />
            <div className='flex flex-col'>
              <span className='font-semibold text-gray-700 text-sm'>{songInfo?.title}</span>
              <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
            </div>
            <div className='flex gap-4 pl-2'>
              <span>
                <AiOutlineHeart />
              </span>
              <span>
                <BsThreeDots />
              </span>
            </div>
        </div>

        <div className='w-[40%] flex-auto flex flex-col items-center justify-center border gap-2 py-2'>
            <div className='flex gap-8 justify-center items-center'>
              <span className='cursor-pointer' title='Random song'>
                <BsShuffle size={16} />
              </span>
              <span className='cursor-pointer'>
                <MdSkipPrevious size={24} />
              </span>
              <span 
                className='hover:text-[#b72479] cursor-pointer'
                onClick={handlePlayMusic}
              >
                {isPlaying ? <BsPauseCircle size={32} /> : <BsPlayCircle size={32} />}
              </span>
              <span className='cursor-pointer'>
                <MdSkipNext size={24} />
              </span>
              <span className='cursor-pointer' title='Repeat song'>
                <BsRepeat size={16} />
              </span>
            </div>

            <div >
              process
            </div>
        </div>

        <div className='w-[30%] flex-auto border'>
            right
        </div>

    </div>
  )
}

export default Player