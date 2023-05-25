import { Link} from "react-router-dom";
import { twenty_five, fifty, oneSession, twoSession, fourSession, eightSession } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { handle25Change, handle50change } from "../controllers/controllers";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function Home() {
    const dispatch = useDispatch();
    const {workTimer, breakTimer, sessionsTimer} = useSelector((state : any) => state)
    const [is25Checked, set25Checked] = useState(true);
    const [is50Checked, set50Checked] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [options, setOptions] = useState({
        timer: '',
        sessions: ''
    });

    useEffect(() => {
        if (is25Checked) {
            dispatch(twenty_five());
        } else {
            dispatch(fifty());
        }

        if (options.timer === '' || options.sessions === '') {
            setDisabled(true)
        }else{
            setDisabled(false)
        }
        
    }, [is25Checked, sessionsTimer, options])

    return(
        <div id="Home">
            
            <div className="container-home">
                <div id="divisores">
                    <h2>Timer</h2>
                    <div className="config-Timer-time">
                        
                        <input id={options.timer !== '25/5' ? 'time' : 'time-active'} type="button" value='25 / 5' onClick={() => {handle25Change({is25Checked, is50Checked, set25Checked, set50Checked}); setOptions({...options, timer: '25/5'})}} />
                    
                        <input id={options.timer !== '50/10' ? 'time' : 'time-active'} onClick={() => {handle50change({is25Checked, is50Checked, set25Checked, set50Checked}); setOptions({...options, timer: '50/10'})}} type="button" value='50 / 10' />
                    </div>
                </div>
                <div id="divisores">
                    <div>
                        <h2>Sessions</h2>
                    </div>
                    <div className="config-Timer-sessions">
                        <input id={options.sessions !== '1' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(oneSession()); setOptions({...options, sessions: '1'})}}  value='1 Session' type="button"/>
                        <input id={options.sessions !== '2' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(twoSession()); setOptions({...options, sessions: '2'})}}  value='2 Session' type="button"/>
                        <input id={options.sessions !== '4' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(fourSession()); setOptions({...options, sessions: '4'})}} value='4 Session' type="button"/>
                        <input id={options.sessions !== '8' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(eightSession()); setOptions({...options, sessions: '8'})}} value='8 Session' type="button"/>
                    </div>
                </div>
                {/* <div id="divisores">
                    <div>
                        <h2>Background Color</h2>
                    </div>
                    <div className="config-Timer-background">
                        <div id={options.color !== 'default' ? "color" : "color-active"} onClick={() => {dispatch(selectColor('#a9d6ec', '#000')); setOptions({...options, color: 'default'})}} className="default"></div>
                        <div id={options.color !== 'grey' ? "color" : 'color-active'} onClick={() => {dispatch(selectColor('#4d4d4d', '#000')); setOptions({...options, color: 'grey'})}} className="grey"></div>
                        <div id={options.color !== 'green' ? "color" : 'color-active'} onClick={() => {dispatch(selectColor('#1a9825', '#000')); setOptions({...options, color: 'green'})}} className="green"></div>
                        <div id={options.color !== 'blue' ? "color" : 'color-active'} onClick={() => {dispatch(selectColor('#080064', '#000')); setOptions({...options, color: 'blue'})}} className="blue"></div>
                        <div id={options.color !== 'violet' ? "color" : 'color-active'} onClick={() => {dispatch(selectColor('#330b56', '#000')); setOptions({...options, color: 'violet'})}} className="violet"></div>
                        <div id={options.color !== 'dark' ? "color" : 'color-active'} onClick={() => {dispatch(selectColor('#191818', '#000')); setOptions({...options, color: 'dark'})}} className="dark"></div>
                    </div>
                </div> */}
                <div>
                    <Link to={`/timer`}>
                        <button className={!disabled ? "btn-start" : "btn-start-disabled"} disabled={disabled}>
                            Start
                        </button>            
                    </Link>
                </div>
            </div>
            <div className="result-home">
                <img src="" alt="Pomo Cat" />
            </div>
        </div>
    )
}

export default Home;