
import './App.css';
import Navbody from './Components/Navbody';
import Login from './Components/Login';
import Register from './Components/Register'
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Carouse from './Components/Carousel';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbody/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/carousel' element={<Carouse/>} ></Route>
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
