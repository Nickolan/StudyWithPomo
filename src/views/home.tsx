import { Link} from "react-router-dom";
import { twenty_five, Sessions, selectOptions, soundEffect, setBackgroundDefault, setBackgroundSpecial ,fifty, dayHour, sessionTimer } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import kitty from '../img/kitty.png';
import Footer from "../components/footer";
import BackButton from "../components/backButton";


function Home() {
    const dispatch = useDispatch();
    const {session, timer, isBackground, sound, objects, selected} = useSelector((state : any) => state)
    const [disabled, setDisabled] = useState(true);
    const images = {
        coffee: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/images%2Fcoffee.png?alt=media&token=82fe1424-2f9d-403b-857b-7a7056f6a400&_gl=1*1t3oxpl*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTUzNjUzOC44LjEuMTY4NTUzNjkzNS4wLjAuMA..',
        river: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/images%2Friver.png?alt=media&token=635c3a8f-ba61-4d42-ae2c-e63a1d53649f&_gl=1*1qbtu1m*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTUzNjUzOC44LjEuMTY4NTUzNzA2OC4wLjAuMA..',
        fireplace: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/images%2Ffireplace.png?alt=media&token=13a36f28-152f-4580-978b-9613a0583715&_gl=1*t1hhue*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTUzNjUzOC44LjEuMTY4NTUzNzA2Mi4wLjAuMA..',
        rain: 'https://firebasestorage.googleapis.com/v0/b/study-with-pomo.appspot.com/o/images%2Frain.png?alt=media&token=337ba98d-e366-4b87-9671-50d26a48fca1&_gl=1*1nd0m4e*_ga*MTY1ODQ3OTUxMy4xNjg1MzY1ODgw*_ga_CW55HF8NVT*MTY4NTUzNjUzOC44LjEuMTY4NTUzNzA2NS4wLjAuMA..',
    }
    const [options, setOptions] = useState({
        timer: '',
        sessions: ''
    });
    
    
    useEffect(() => {
        dispatch(dayHour());
    }, [])
    useEffect(() => {
        dispatch(sessionTimer());
    }, [session, timer]);

    const selectTimer = () => {
        if (options.timer === '25/5') {
            dispatch(twenty_five());
        } else if(options.timer === '50/10') {
            dispatch(fifty());
        }
    };
    useEffect(() => {
        selectTimer()
        
        if (options.timer === '' || options.sessions === '') {
            setDisabled(true)
        }else{
            setDisabled(false)
        }
        
    }, [options])

    const handleSound = () => {
        dispatch(soundEffect())
    }
    const handleSelections = (value: string) =>{
        let obj =  objects.find((elem: any) => elem.name === value)
        dispatch(selectOptions(obj))
    }

    return(
        <div id="Home">
            <BackButton></BackButton>
            <div className="container-home">
                <div id="divisores">
                    <h2>Timer</h2>
                    <div className="config-Timer-time">
                        
                        <input id={options.timer !== '25/5' ? 'time' : 'time-active'} type="button" value='25 / 5' onClick={() => setOptions({...options, timer: '25/5'})} />
                    
                        <input id={options.timer !== '50/10' ? 'time' : 'time-active'} onClick={() => setOptions({...options, timer: '50/10'})} type="button" value='50 / 10' />
                    </div>
                </div>
                <div id="divisores">
                    <div>
                        <h2>Sessions</h2>
                    </div>
                    <div className="config-Timer-sessions">
                        <input id={options.sessions !== '1' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(Sessions(1)); setOptions({...options, sessions: '1'})}} value='Chill'  title='1 Hour' type="button"/>
                        <input id={options.sessions !== '2' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(Sessions(2)); setOptions({...options, sessions: '2'})}}  value='Casual' title='2 Hour/s' type="button"/>
                        <input id={options.sessions !== '4' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(Sessions(4)); setOptions({...options, sessions: '4'})}} value='Part Time' title="4 Hour/s " type="button"/>
                        <input id={options.sessions !== '8' ? 'sessions' : 'sessions-active'} onClick={() => {dispatch(Sessions(8)); setOptions({...options, sessions: '8'})}} value='Full Time' title="8 Hour/s" type="button"/>
                    </div>
                </div>
                <div id="divisores">
                    <div>
                        <h2>BackGround</h2>
                    </div>
                    <div className="config-Timer-sessions">
                        <input onClick={ () => dispatch(setBackgroundDefault())} id={!isBackground ? 'Background-active' : 'Background'} value='Default' type="button" />
                        <input onClick={ () => dispatch(setBackgroundSpecial())} id={isBackground ? 'Background-active' : 'Background'} type="button" value="ambience" />
                    </div>
                </div>
                <div>
                    <Link to={`/timer`}>
                        <button className={!disabled ? "btn-start" : "btn-start-disabled"} disabled={disabled}>
                            Start
                        </button>            
                    </Link>
                </div>
            </div>
            <div className="result-home">
                {
                    isBackground ? <div className="images-back">
                        <div className="images-button">
                            <button id={selected.name === 'coffee' ? 'button-back-active' : 'button-back'} onClick={() => handleSelections('coffee')} name='coffee'><img id="environment" src={images.coffee} alt="Coffee" /></button>
                            <button id={selected.name === 'fireplace' ? 'button-back-active' : 'button-back'} onClick={() => handleSelections('fireplace')} name='fireplace'><img id="environment" src={images.fireplace} alt="" /></button>
                            <button id={selected.name === 'rain' ? 'button-back-active' : 'button-back'} onClick={() => handleSelections('rain')} name='rain'><img id="environment" src={images.rain} alt="" /></button>
                            <button id={selected.name === 'river' ? 'button-back-active' : 'button-back'} onClick={() => handleSelections('river')} name='river'><img id="environment" src={images.river} alt="" /></button>  
                        </div>
                        <div><label ><input type="radio" onClick={handleSound} checked={sound} name="environment" id="environment" /> Apply sound Enviroment</label></div>
                    </div>  : null
                }
                <img className="kitty" src={kitty} alt="Pomo Cat" />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;