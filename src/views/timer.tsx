import {useState, useEffect} from "react";
import { formatTimer } from "../controllers/controllers";
import { useDispatch, useSelector } from "react-redux";
import { dayHour } from "../redux/action";
//import Play from '../img/Resume.png';

function Timer() {

  const {workTimer, breakTimer, sessionsTimer} = useSelector((state : any) => state)
  const [timer, setTimer] = useState(true)
  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);
  const [leftSessions, setLeftSession] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seconds < 0) {
      if (leftSessions === sessionsTimer) {
        setActive(false);
        alert('time done');
        setSeconds(0)
      } else {
        if (timer) {
          setLeftSession((times : number) => times + 1);
          setTimer(!timer);
        } else {
          setTimer(!timer);
        }
      }
    }
}, [seconds])


  useEffect(() => {
    dispatch(dayHour());
    if (active && sessionsTimer >= 0) {
      if (timer) {
        setSeconds(workTimer);
      } else {
        setSeconds(breakTimer);
      }
      
    }
  }, [timer]);

  useEffect(() => {
    let interval : any;
    dispatch(dayHour());
    if (active) {
      interval = setInterval(() => {
        setSeconds((prevSeconds : number) => prevSeconds - 1);
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [active])
  
  const startTimer = () => {
    setActive(true);
  };
    
  const stopTimer = () => {
    setActive(false);
  };

  return(
    <div id="Timer">
        <h1 className="time">{formatTimer(seconds)}</h1>
      <div className="timer-status">
        
        <div className="buttons-timer">
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
        <h2 >{leftSessions} / {sessionsTimer}</h2>
      </div>
    </div>
  )
}

export default Timer;