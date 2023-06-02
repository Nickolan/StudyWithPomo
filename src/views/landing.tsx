import Pomo from '../img/pomo.png';
import Reloj from '../img/Clock.png';
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div id='Landing'>
            <h1>Study With Pomo</h1>
            <div>
            <Link to={`/home`}>
                <img className='clock' src={Reloj} alt="Watch" />
                <img className='pomoCat' src={Pomo} alt="pomoCat" />
            </Link>
            </div>
        </div>
    )
}

export default Landing;