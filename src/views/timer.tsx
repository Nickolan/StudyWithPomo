import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


function Timer() {

  const {workTimer, breakTimer} = useSelector((state : any) => state)
  

  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);


  useEffect(() => {
    let interval : any;
    
    if (active) {
      interval = setInterval(() => {
        setSeconds((prevSeconds : number) => prevSeconds - 1);
      }, 1000)
    }
    
    return () => clearInterval(interval)
  }, [active]);

  const startTimer = () => {
    setActive(true);
  };
    
  const stopTimer = () => {
    setActive(false);
  };
    
  const resetTimer = () => {
    setSeconds(1500)
    setActive(false);
  };

  const formatTimer = (totalSeconds : number) => {
    const minutes : number = Math.floor(totalSeconds / 60);
    const seconds : number = totalSeconds % 60;

    const formattedMinutes : string = String(minutes).padStart(2, '0');
    const formattedSeconds : string = String(seconds).padStart(2, '0');

    return `${formattedMinutes} : ${formattedSeconds}`;
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