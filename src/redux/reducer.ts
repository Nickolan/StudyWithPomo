const initialState : object = {
    workTimer: 0,
    breakTimer: 0,
}

function rootReducer (state = initialState, action : any) {
    switch (action.type) {
        case '25/5':
            return{
                ...state,
                workTimer: 1500,
                breakTimer: 300, 
            }
        case '50/10':
            return{
                ...state,
                workTimer: 3000,
                breakTimer: 600,
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;