import icons from './icons'

const { MdLibraryMusic, FiRadio, BsSoundwave, MdOutlineFeed } = icons

export const sidebarMenu = [
    {
        path: 'my-music',
        text: 'Personal',
        icons: <MdLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Discover',
        icons: <FiRadio size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <BsSoundwave size={24} />
    },
    {
        path: 'follow',
        text: 'Follow',
        icons: <MdOutlineFeed size={24} />
    },
]   