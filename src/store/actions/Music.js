import ActionTypes from "./ActionTypes";

export const setCurrentSongID = (id) => ({
    type: ActionTypes.SET_CURRENT_SONG_ID,
    id 
})

export const play = (flag) => ({
    type: ActionTypes.PLAY,
    flag
})