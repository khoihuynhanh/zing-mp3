import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSlider } from '../ultis/fn'
import * as actions from '../store/actions'

const Slider = () => {
    const { banner } = useSelector(state => state.app)

    const dispatch = useDispatch()

    useEffect(() => {
        const sliderItems = document.querySelectorAll('.slider-items')
        let min = 0
        let max = 2
        const intervalID = setInterval(() => {
            const list = getSlider(min, max, sliderItems.length - 1)

            for (let i = 0; i < sliderItems.length; i++) {
                // delete classnames
                sliderItems[i].classList.remove('animate-slide-right', 'order-last', 'z-20')
                sliderItems[i].classList.remove('animate-slide-left', 'order-first', 'z-10')
                sliderItems[i].classList.remove('animate-slide-left2', 'order-2', 'z-10')

                // hide or show images
                if (list.some(item => item === i)) {
                    sliderItems[i].style.cssText = `display: block`
                } else {
                    sliderItems[i].style.cssText = `display: none`
                }
            }

            // add animations
            list.forEach(item => {
                if (item === max) {
                    sliderItems[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderItems[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderItems[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })

            min = (min === sliderItems.length - 1) ? 0 : min + 1
            max = (max === sliderItems.length - 1) ? 0 : max + 1

        }, 3000);

        return () => intervalID && clearInterval(intervalID)

    }, [])

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurrentSongID(item.encodeId))
            dispatch(actions.play(true))
        }
    }

    return (
        <div className='flex gap-6 w-full overflow-hidden'>
            {banner.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    className={`slider-items flex-1 object-contain w-[31%] rounded-lg ${index <= 2 ? 'block': 'hidden'}`}
                />
            ))}
        </div>
    )
}

export default Slider