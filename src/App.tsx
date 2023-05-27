import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/landing';
import Home from './views/home';
import Timer from './views/timer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayHour } from './redux/action';


function App() {
  const dispatch = useDispatch();
  const { primaryColor, secundaryColor } = useSelector((state: any) => state)
  let divStyle = {
    background: `linear-gradient(${primaryColor} 50%, ${secundaryColor})`
  }

  useEffect(() =>{
    dispatch(dayHour());
  }, [])
  return (
    <div style={divStyle} className="App">
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/timer' element={<Timer />}></Route>
    </Routes>
    </div>
  );
}

export default App;

