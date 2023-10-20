import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { ShowOnLogout } from './components/hiddenLink/hiddenLink';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='App'>
      <Header/>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/addtocart' element={<Cart/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
