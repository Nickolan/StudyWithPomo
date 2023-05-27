import { Link} from "react-router-dom";
import { twenty_five, fifty, oneSession, twoSession, fourSession, eightSession, dayHour, sessionTimer } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { handle25Change, handle50change } from "../controllers/controllers";

function Home() {
    const dispatch = useDispatch();
    const {sessionsTimer, session, timer, primaryColor, secundaryColor} = useSelector((state : any) => state)
    const [disabled, setDisabled] = useState(true);
    const [options, setOptions] = useState({
        timer: '',
        sessions: ''
    });
    let divStyle = {
        background: `linear-gradient(${primaryColor}, ${secundaryColor})`
    }
    
    
    useEffect(() => {
        dispatch(dayHour());
    }, [])
    useEffect(() => {
        dispatch(sessionTimer());
    }, [session, timer]);

    const selectTimer = () => {
        if (options.timer === '25/5') {
            dispatch(twenty_five());
        } else if(options.timer === '50/10') {
            dispatch(fifty());
        }
    };
    useEffect(() => {
        selectTimer()
        
        if (options.timer === '' || options.sessions === '') {
            setDisabled(true)
        }else{
            setDisabled(false)
        }
        
    }, [options])

    return(
        <div id="Home">
            
            <div className="container-home">
                <div id="divisores">
                    <h2>Timer</h2>
                    <div className="config-Timer-time">
                        
                        <input id={options.timer !== '25/5' ? 'time' : 'time-active'} type="button" value='25 / 5' onClick={() => setOptions({...options, timer: '25/5'})} />
                    
                        <input id={options.timer !== '50/10' ? 'time' : 'time-active'} onClick={() => setOptions({...options, timer: '50/10'})} type="button" value='50 / 10' />
                    </div>
                </div>
                <div id="divisores">
                    <div>
                        <h2>Sessions</h2>
                    </div>
                    <div className="config-Timer-sessions">
                        <input id={options.sessions !== '1' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(oneSession()); setOptions({...options, sessions: '1'})}}  value='1 Hour/s' type="button"/>
                        <input id={options.sessions !== '2' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(twoSession()); setOptions({...options, sessions: '2'})}}  value='2 Hour/s' type="button"/>
                        <input id={options.sessions !== '4' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(fourSession()); setOptions({...options, sessions: '4'})}} value='4 Hour/s' type="button"/>
                        <input id={options.sessions !== '8' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(eightSession()); setOptions({...options, sessions: '8'})}} value='8 Hour/s' type="button"/>
                    </div>
                </div>
                <div>
                    <Link to={`/timer`}>
                        <button className={!disabled ? "btn-start" : "btn-start-disabled"} disabled={disabled}>
                            Start
                        </button>            
                    </Link>
                </div>
            </div>
            <div className="result-home">
                <div style={divStyle} className="demo">
                    <h2>00:00</h2>
                </div>
                <img src="" alt="Pomo Cat" />
            </div>
        </div>
    )
}

export default Home;