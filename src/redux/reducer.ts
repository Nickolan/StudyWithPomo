const initialState : object = {
    workTimer: 0,
    breakTimer: 0,
    sessionsTimer: 0,
    background: '#fff',
    text: '#fff'
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
        case 'oneSession':
            return{
                ...state,
                sessionsTimer: 1
            }
        case 'twoSession':
            return{
                ...state,
                sessionsTimer: 2
            }
        case 'fourSession':
            return{
                ...state,
                sessionsTimer: 4
            }
        case 'eightSession':
            return{
                ...state,
                sessionsTimer: 8
            }
        case 'selectColor':
            return{
                ...state,
                background: action.payload.bgcolor,
                text: action.payload.textColor
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;