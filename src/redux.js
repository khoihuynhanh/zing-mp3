import RootReducer from "./store/reducers/RootReducer";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";

const reduxConfig = () => {
    const store = createStore(RootReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)

    return {store, persistor}
}

export default reduxConfig