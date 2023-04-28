import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>

        <Routes>
        <Route path="/" element ={<Navigate to= "/home"/>} />
        <Route path="home" element ={<Home/>}/>
        <Route path="login" element ={<Login/>}/>
        <Route path="signup" element ={<Signup/>}/>
        <Route path="chat" element ={<Chat/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
