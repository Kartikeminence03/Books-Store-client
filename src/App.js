import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer position='top-center'/>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home'>
            <Route index element={<Home/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
