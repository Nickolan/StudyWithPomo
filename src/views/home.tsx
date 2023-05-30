import { Link} from "react-router-dom";
import { twenty_five, selectOptions, soundEffect, setBackgroundDefault, setBackgroundSpecial ,fifty, oneSession, twoSession, fourSession, eightSession, dayHour, sessionTimer } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import kitty from '../img/kitty.png';


function Home() {
    const dispatch = useDispatch();
    const {session, timer, isBackground, sound, objects, selected} = useSelector((state : any) => state)
    const [disabled, setDisabled] = useState(true);
    const [options, setOptions] = useState({
        timer: '',
        sessions: ''
    });
    
    
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

    const handleSound = () => {
        dispatch(soundEffect())
    }
    const handleSelections = (event: any) =>{
        let value = event.target.value
        let obj =  objects.find((elem: any) => elem.name === value)
        dispatch(selectOptions(obj))
    }

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
                        <input id={options.sessions !== '1' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(oneSession()); setOptions({...options, sessions: '1'})}} value='Chill'  title='1 Hour' type="button"/>
                        <input id={options.sessions !== '2' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(twoSession()); setOptions({...options, sessions: '2'})}}  value='Casual' title='2 Hour/s' type="button"/>
                        <input id={options.sessions !== '4' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(fourSession()); setOptions({...options, sessions: '4'})}} value='Part Time' title="4 Hour/s " type="button"/>
                        <input id={options.sessions !== '8' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(eightSession()); setOptions({...options, sessions: '8'})}} value='Full Time' title="8 Hour/s" type="button"/>
                    </div>
                </div>
                <div id="divisores">
                    <div>
                        <h2>BackGround</h2>
                    </div>
                    <div className="config-Timer-sessions">
                        <input onClick={ () => dispatch(setBackgroundDefault())} id='Background' value='Default' type="button" />
                        <input onClick={ () => dispatch(setBackgroundSpecial())} id="Background" type="button" value="ambience" />
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
                {
                    isBackground ? <div>
                        <div>
                        <input type="button" onClick={handleSelections} value='coffee' name="enviroment" id="" />
                        <input type="button" onClick={handleSelections} value='rain' name="enviroment" id="" />
                        <input type="button" onClick={handleSelections} value='fireplace' name="enviroment" id="" />
                        <input type="button" onClick={handleSelections} value='river' name="enviroment" id="" />
                        </div>
                        <audio src={selected.sound}>Hola</audio>
                        <div><label ><input type="radio" onClick={handleSound} checked={sound} name="enviroment" id="enviroment" /> Apply sound Enviroment</label></div>
                    </div>  : null
                }
                <img className="kitty" src={kitty} alt="Pomo Cat" />
            </div>
        </div>
    )
}

export default Home;