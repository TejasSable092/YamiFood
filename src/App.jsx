import './App.css'
import Footter from "./Componenets/Footter";
import Header from "./Componenets/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componenets/Home';
import Aboutus from './Componenets/Aboutus';
import Ourfood from './Componenets/Ourfood';
import SignIn from './Componenets/SignIn';
import { useState } from 'react';
 

 
const  App=()=> {
  const [count, setCount]=useState(0);
  const HandelAdd=()=>{
    setCount(count+1);
  }

  return (
    <>
    <div>
    <BrowserRouter>
         <Header count={count}/>
         <Routes>
         <Route path="/" element={<Home HandelAdd={HandelAdd}/>}/>
         <Route path="/aboutus" element={<Aboutus/>}/>
         <Route path="/ourfood" element={<Ourfood HandelAdd={HandelAdd}/>}/>
         <Route path="/signIn" element={<SignIn/>}/>
         </Routes>
         <Footter/>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App;