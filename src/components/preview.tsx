import Pause from '../img/pause.png';
import { useSelector } from 'react-redux';
import { formatTimer } from '../controllers/controllers';

function Preview() {
    const {sessionsTimer, workTimer} = useSelector((state : any) => state)
    return (
        <div id='Preview'>
            <div className='prev-img'>
                <img src={Pause} alt="" />
            </div>
                <h3>{formatTimer(workTimer)}</h3>
            <div className='prev-status'>
                <h3>Work Time</h3>
                <h3 >Pomodoro #0 / {sessionsTimer}</h3>
            </div>
        </div>
    )
}

export default Preview