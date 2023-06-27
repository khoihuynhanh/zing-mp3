import ActionTypes  from '../actions/ActionTypes';

const initState = {
    currentSongID: null,
    isPlaying: false,
}

// action là dispatch đưa lên

const MusicReducer = ((state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_SONG_ID:
            return {
                ...state,
                currentSongID: action.id || null
            }

        case ActionTypes.PLAY:
            return {
                 ...state,
                isPlaying: action.flag
             }
    
        default: 
            return state
    }
})

export default MusicReducer