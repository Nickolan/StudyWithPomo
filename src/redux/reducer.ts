const initialState : any = {
    workTimer: 1500,
    breakTimer: 300,
    timer: 1,
    session: 1,
    sessionsTimer: 1,
    sectionDay: '',
    primaryColor: '',
    secundaryColor: '',
}

function rootReducer (state = initialState, action : any) {
    switch (action.type) {
        case '25/5':
            return{
                ...state,
                workTimer: 15,
                breakTimer: 3, 
                timer: 2,
            }
        case '50/10':
            return{
                ...state,
                workTimer: 3000,
                breakTimer: 600,
                timer: 1
            }
        case 'oneHour':
            return{
                ...state,
                session: 1
            }
        case 'twoHours':
            return{
                ...state,
                session: 2
            }
        case 'fourHours':
            return{
                ...state,
                session: 4
            }
        case 'eightHours':
            return{
                ...state,
                session: 8
            }
        case 'DAYHOUR':
            return{
                ...state,
                sectionDay: action.payload.moment, 
                primaryColor: action.payload.primary,
                secundaryColor: action.payload.secundary
            }
        case 'SESSION_TIMER':
            return{
                ...state,
                sessionsTimer: state.session * state.timer
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;