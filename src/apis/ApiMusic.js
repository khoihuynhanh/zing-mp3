import axios from '../axios'

export const getSong = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios({
                url: '/song',
                method: 'get',
                params: {id: id}
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}

export const getDetailSong = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios({
                url: '/infoSong',
                method: 'get',
                params: {id: id}
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}