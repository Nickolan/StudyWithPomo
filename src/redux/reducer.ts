const initialState : any = {
    workTimer: 1500,
    breakTimer: 300,
    timer: 1,
    session: 1,
    sessionsTimer: 1,
    sectionDay: '',
    primaryColor: '',
    secundaryColor: '',
    isBackground : false,
    objects: [
        {name: 'coffee', video: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/videos%2Fcoffee.mp4?alt=media&token=c5dee3cb-b348-4e6b-9aba-ece2d9abad38&_gl=1*e2w8gf*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjAuMTY4NTQ3MTE4NS4wLjAuMA..', sound: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/efectos%20sonido%2Fcoffeplace.mp3?alt=media&token=fdf103dd-d50e-4f47-93ee-2c81eee21d96&_gl=1*hue3py*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjMwMC4wLjAuMA..'},
        {name: 'river', video: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/videos%2Friver.mp4?alt=media&token=9ba7f214-e077-45ab-9dca-305c288a1500&_gl=1*1o8d87p*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjQ1MC4wLjAuMA..', sound: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/efectos%20sonido%2Friversound.mp3?alt=media&token=773a0db9-4b44-42d2-9614-2df63de9cf71&_gl=1*tpbiz7*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjQxOC4wLjAuMA..'},
        {name: 'fireplace', video: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/videos%2Ffireplace.mp4?alt=media&token=c6569438-8a2f-45b2-bf60-b001985131bf&_gl=1*kf0vnp*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjQzMy4wLjAuMA..', sound: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/efectos%20sonido%2Ffiresound.mp3?alt=media&token=7a442591-92cb-432d-8e9d-c74298c92282&_gl=1*1cfhngp*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjM4OS4wLjAuMA..'},
        {name: 'rain', video: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/videos%2Frain.mp4?alt=media&token=01428b63-22c7-4527-a4e2-46473bdfa437&_gl=1*1skmklr*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjQ0OC4wLjAuMA..', sound: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/efectos%20sonido%2Frainsound.mp3?alt=media&token=5373e1ec-fefa-4a1a-9de3-350b8588693c&_gl=1*1nw08sp*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTQ3MTE4NS41LjEuMTY4NTQ3MjQwNC4wLjAuMA..'}
    ],
    sound: false,
    selected: {}
}

function rootReducer (state = initialState, action : any) {
    switch (action.type) {
        case '25/5':
            return{
                ...state,
                workTimer: 1500,
                breakTimer: 300, 
                timer: 2,
            }
        case '50/10':
            return{
                ...state,
                workTimer: 3000,
                breakTimer: 600,
                timer: 1
            }
        case 'SESSIONS':
            return{
                ...state,
                session: action.payload
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
        case 'SETBACKGROUNDDEFAULT':
            return{
                ...state,
                isBackground: false
            }
        case 'SETBACKGROUNDSPECIAL':
            return{
                ...state,
                isBackground: true
            }
        case 'SOUND':
            return {
                ...state,
                sound: !state.sound
            }
        case 'SELECT_OPTIONS':
            return{
                ...state,
                selected: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;