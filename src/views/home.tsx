import { Link } from "react-router-dom";
import { twenty_five, fifty, oneSession, twoSession, fourSession, eightSession, selectColor } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { handle25Change, handle50change } from "../controllers/controllers";

function Home() {
    const dispatch = useDispatch();
    const {workTimer, breakTimer, sessionsTimer} = useSelector((state : any) => state)
    const [is25Checked, set25Checked] = useState(true);
    const [is50Checked, set50Checked] = useState(false);

    useEffect(() => {
        if (is25Checked) {
            dispatch(twenty_five());
        } else {
            dispatch(fifty());
        }
        
    }, [is25Checked, sessionsTimer])

    return(
        <div id="Home">
            <div className="config-Timer-content">
                <input type="radio" checked={is25Checked} onChange={() => handle25Change({is25Checked, is50Checked, set25Checked, set50Checked})} name="25/5"/>
                <label htmlFor="25/5">25/5</label>
                <input checked={is50Checked} onChange={() => handle50change({is25Checked, is50Checked, set25Checked, set50Checked})} type="radio" name="50/10"/>
                <label htmlFor="50/10">50/10</label>
            </div>
            <div className="config-Timer-sessions">
                <label htmlFor="oneSessions"><input onChange={() => dispatch(oneSession())} checked={sessionsTimer === 'oneSession'} type="radio"/>1 Session</label>
                <label htmlFor="twoSessions"><input onChange={() => dispatch(twoSession())} checked={sessionsTimer === 'twoSession'} type="radio"/>2 Session</label>
                <label htmlFor="fourSessions"><input onChange={() => dispatch(fourSession())} checked={sessionsTimer === 'fourSession'}  type="radio"/>4 Session</label>
                <label htmlFor="eightSessions"><input onChange={() => dispatch(eightSession())} checked={sessionsTimer === 'eightSession'}  type="radio"/>8 Session</label>
            </div>
            <div className="config-Timer-background">
                <div id="color" onClick={() => dispatch(selectColor('#f2e9e1', '#000'))} className="default"></div>
                <div id="color" onClick={() => dispatch(selectColor('#4d4d4d', '#fff'))} className="grey"></div>
                <div id="color" onClick={() => dispatch(selectColor('#18741f', '#000'))} className="green"></div>
                <div id="color" onClick={() => dispatch(selectColor('#080064', '#fff'))} className="blue"></div>
                <div id="color" onClick={() => dispatch(selectColor('#330b56', '#fff'))} className="violet"></div>
                <div id="color" onClick={() => dispatch(selectColor('#191818', '#fff'))} className="dark"></div>
            </div>
            <div>
            </div>
            <Link to={`/timer`}>
                <button>Start</button>            
            </Link>
        </div>
    )
}

export default Home;