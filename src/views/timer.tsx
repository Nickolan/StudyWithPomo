import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTimer } from "../controllers/controllers";


function Timer() {

  const {workTimer, breakTimer} = useSelector((state : any) => state)
  
  const [timer, setTimer] = useState(true)
  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (seconds < 0) {
      setTimer(!timer);
    }
}, [seconds])

  useEffect(() => {
    let interval : any;
    
    if (active) {
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
    
  const resetTimer = () => {
    setTimer(!timer);
  };
  return(
    <div id="timer">
      <div>{formatTimer(seconds)}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer;