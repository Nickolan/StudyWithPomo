import {useState, useEffect} from "react";
import {  useSelector } from "react-redux";
import { formatTimer } from "../controllers/controllers";

function Timer() {

  const {workTimer, breakTimer, sessionsTimer} = useSelector((state : any) => state)
  const [timer, setTimer] = useState(true)
  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);
  const [leftSessions, setLeftSession] = useState(sessionsTimer);
  // let divStyle = {
  //   background: `linear-gradient(${primaryColor} 50%, ${secundaryColor})`
  // }

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
    <div id="Timer">
      <div className="timer-status">
        <div className="buttons-timer">
        <button onClick={startTimer}>Start</button><button onClick={stopTimer}>Stop</button>
        </div>
        <h2 >{leftSessions}</h2>
      </div>
        <h1 className="time">{formatTimer(seconds)}</h1>
    </div>
  )
}

export default Timer;