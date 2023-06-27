import ActionTypes  from '../actions/ActionTypes';

const initState = {
    banner: [],
}

// action là dispatch đưa lên

const AppReducer = ((state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null
            }
    
        default: 
            return state
    }
})

export default AppReducer