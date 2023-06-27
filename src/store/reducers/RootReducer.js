import AppReducer from "./AppReducer";
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import MusicReducer from "./MusicReducer";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: ['currentSongID']
}

const RootReducer = combineReducers({
    app: AppReducer,
    music: persistReducer(musicConfig, MusicReducer),
})

export default RootReducer