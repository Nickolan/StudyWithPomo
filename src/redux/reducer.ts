const initialState : object = {
    workTimer: 1500,
    breakTimer: 300,
    sessionsTimer: 1,
    sectionDay: '',
    primaryColor: '',
    secundaryColor: ''
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
        case 'DAYHOUR':
            return{
                ...state,
                sectionDay: action.payload.moment, 
                primaryColor: action.payload.primary,
                secundaryColor: action.payload.secundary
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;