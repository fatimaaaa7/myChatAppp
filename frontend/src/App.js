import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>

        <Routes>
        <Route path="/" element ={<Navigate to= "/home"/>} />
        <Route path="home" element ={<Home/>}/>
        <Route path="login" element ={<Login/>}/>
        <Route path="signUp" element ={<SignUp/>}/>
        <Route path="chat" element ={<Chat/>}/>
        <Route path="homepage" element ={<Homepage/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
