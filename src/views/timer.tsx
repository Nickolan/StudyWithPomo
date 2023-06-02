import {useState, useEffect} from "react";
import { formatTimer } from "../controllers/controllers";
import { useDispatch, useSelector } from "react-redux";
import { dayHour } from "../redux/action";
import Play from '../img/Resume.png';
import Stop from '../img/pause.png';
import ProgressBarStep from "../components/ProgressbarStep";
import { playSound, effectSound } from "../audios/sound";
import { VideoTimer } from "../videos/timerVideo";
import BackButton from "../components/backButton";

function Timer() {

  const {workTimer, selected, breakTimer, sessionsTimer, isBackground, sound} = useSelector((state : any) => state)
  const [timer, setTimer] = useState(true)
  const [seconds, setSeconds] = useState(workTimer);
  const [active, setActive] = useState(true);
  const [leftSessions, setLeftSession] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sound) {
      effectSound()
    } 
  }, [])

  useEffect(() => {
    if (seconds < 0) {
      playSound();
      if (leftSessions === sessionsTimer) {
        setActive(false);
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
      <BackButton></BackButton>
            <audio src={selected.sound} autoPlay={sound} loop={timer}></audio>
      {isBackground ? <VideoTimer></VideoTimer> : null}
        <div className="buttons-timer">
          {
            !active ? <img onClick={startTimer} src={Play} alt="Start" /> : <img src={Stop} alt="Stop" onClick={stopTimer} />
          }
        </div>
      <div className="time">
        <h1 >{formatTimer(seconds)}</h1>
      </div>
      <div className="timer-status">
          <h2 >{timer ? 'Work Time' : 'Break Time'}</h2>
          <h2 >Pomodoro #{leftSessions} / {sessionsTimer}</h2>
      </div>
      <div className="ProgressBar">
      {
        <ProgressBarStep percent={timer ? (workTimer - seconds) * 100 / workTimer : (breakTimer - seconds) * 100 / breakTimer} />
      }
      </div>
    </div>
  )
}

export default Timer;