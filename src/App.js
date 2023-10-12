import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
