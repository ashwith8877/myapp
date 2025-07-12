
import { useState } from 'react';
import './App.css';
// import About from './componenets/About';
import Navbar from './componenets/Navbar';
import Text from './componenets/Text';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

import Alert from './componenets/Alert';
function App() {

  const [mode,setmode] = useState("light");

  const [alert,setalert] = useState(null);

  const showalert = (msg,type) =>{

    setalert({
      msg:msg,
      type:type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

 const togglermode = () =>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='grey';
    showalert(" dark mode is enabled","success");
   
  }
  else{
    setmode('light')
        document.body.style.backgroundColor='white';
            showalert(" light mode is enabled","success");
  }
 }

 const greeenmode = () =>{
  setmode('green')
  document.body.style.backgroundColor='#28a745';
   showalert(" green mode is enabled","success");

 }

  const yellowmode = () =>{
  setmode('yellow')
  document.body.style.backgroundColor='#ffc107';
   showalert(" yellow mode is enabled","success");

 }
  return (
    <>
    
    
    
  
    {/* <Router>     */}
      <Navbar mode = {mode} togglermode={togglermode} greeenmode={greeenmode} yellowmode={yellowmode}/>   
      <Alert alert ={alert}></Alert>                               
    <div className='container my-5'>
{/*       
      <Routes>
          <Route path="/about" element={<About />}>
          </Route> */}
          <Text heading='Enter some description' mode = {mode} showalert={showalert}/>
          {/* </Route>
        </Routes> */}
    </div>
    {/* </Router> */}
  
    </>
    // <Navbar title='Some Website' about="about website"/>
)
};

export default App;


