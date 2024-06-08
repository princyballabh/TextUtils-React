
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode,setmode]=useState('light');
  const [text,settext]=useState('Enable Dark Mode');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }




  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      settext("Enable Light Mode")
      showalert("Dark Mode Enabled","success")
      document.body.style.backgroundColor='#04072b';
    }
    else{
    setmode('light');
    settext("Enable Dark Mode")
    showalert("Light Mode Enabled","success")
    document.body.style.backgroundColor= 'white';
    }
  }
  return (
   <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} text={text} togglemode={togglemode} about="About"/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    <Routes>
      <Route
        path="/"
        element={ */}
        <Textform heading="Enter the text to analyze" mode={mode}/>
    {/* </Routes>   */}
   </div> 
   {/* </BrowserRouter> */}
   </>
  );
}

export default App;
