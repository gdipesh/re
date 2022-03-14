import React from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./components/Icons/css/all.min.css";
import "./components/css/insta.css";
import About from './components/pages/About';
import Home from './components/pages/Home';
import Info from "./components/pages/Info";
const App =()=> {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
       <Route path="info" element={<Info/>}/>
      </Routes>
   
   </> 
  );
}

export default App;
