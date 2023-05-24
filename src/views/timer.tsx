import {useState, useEffect} from "react";
import {  useSelector } from "react-redux";
import { formatTimer } from "../controllers/controllers";
import { useNavigate } from "react-router-dom";


function Timer() {

  const {workTimer, breakTimer, sessionsTimer, background, text} = useSelector((state : any) => state)
  const navigate = useNavigate();
  const divStyle = {
    backgroundColor: background,
  };
  
  const [timer, setTimer] = useState(true)
  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);
  const [leftSessions, setLeftSession] = useState(sessionsTimer);

  useEffect(() => {
    if (seconds < 0) {
      if (leftSessions === 1) {
        setLeftSession((times : number) => times - 1);
        setActive(false);
        alert('time done');
        setSeconds(0)
      } else {
        if (timer) {
          setLeftSession((times : number) => times - 1);
          setTimer(!timer);
        }
      }
    }
}, [seconds])


  useEffect(() => {
    let interval : any;
    
    if (active && sessionsTimer > 0) {
      if (timer) {
        setSeconds(workTimer);
      } else {
        setSeconds(breakTimer);
      }
      interval = setInterval(() => {
        setSeconds((prevSeconds : number) => prevSeconds - 1);
      }, 1000)
    }
    
    return () => clearInterval(interval)
  }, [active, timer]);

  
  
  const startTimer = () => {
    setActive(true);
  };
    
  const stopTimer = () => {
    setActive(false);
  };

  return(
    <div style={divStyle} id="Timer">
      <div>
        <button onClick={startTimer}>Start</button><button onClick={stopTimer}>Stop</button>
        <h2 style={{ color: text }}>{leftSessions}</h2>
      </div>
      <div>
        <h1 style={{ color: text }} className="time">{formatTimer(seconds)}</h1>
      </div>
    </div>
  )
}

export default Timer;