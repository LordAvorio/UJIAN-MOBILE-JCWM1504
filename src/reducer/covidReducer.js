const INITIAL_STATE = {
    dataGlobal: [],
    dataLocal: []
}

const covidReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_GLOBAL':
            return {
                ...state,
                dataGlobal: action.payload
            }
        case 'GET_LOCAL':
            return{
                ...state,
                dataLocal: action.payload
            }
        default:
            return state
    }
}

export default covidReducer