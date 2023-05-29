import video from "./rain.mp4";
import Pause from '../img/pause.png';
import { useSelector } from 'react-redux';
import { formatTimer } from '../controllers/controllers';

export const Video =() => {
  const {sessionsTimer, workTimer} = useSelector((state) => state)
    return (
        <div id="Videos">
          <div className="videoloop">
            <video autoPlay muted loop >
              <source src={video} type="video/mp4" /> 
            </video>
          </div>
          <div className="text">
            <h3>{formatTimer(workTimer)}</h3>
              <div className='prev-status'>
                  <h3>Work Time</h3>
                  <h3 >Pomodoro #0 / {sessionsTimer}</h3>
              </div>
          </div>
        </div>
      );
}
