
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setmode]= useState('light');
   //whether dark mode is enabled or not!
   const [alert,setAlert]=useState(null); //usestate for alert .
   const showAlert =(message,type)=>{
     setAlert({
       msg : message,
       type:type

     })
     setTimeout(()=>{
       setAlert(null);
     },1500);
   }
  const toggleMode=()=>{
  if(mode ==="light"){
    setmode('dark');
    document.body.style.backgroundColor ='grey';
    showAlert("dark mode has been enabled","success");
  }else{
    setmode('light');
    document.body.style.backgroundColor ='white';
    showAlert("dark mode has been enabled","success");
  }

}
  return (   
    
      <div className='container'>
    
  
  <BrowserRouter>
  <Navbar title="Ankush" mode ={mode}  toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 
    <Routes>
      <Route path="/" element={<Textform />}/>
      <Route path="/about" element={<About/>}/>
      
     </Routes>
  </BrowserRouter>,


    </div>
   
   
  );
}

export default App;
 