import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const [color, setColor] = useState('#6C0BA9');

  const colorChange=(event)=>{
   
    setColor(event.target.value);
    
  }

  // const toggleColor=()=>{
  //  let newColor = 
   
  // }
 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode=()=>{ 
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
     showAlert('Dark mode has been enabled', 'success')
     document.title='TextUtils- Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
     showAlert('Light mode has been enabled', 'success')
     document.title='Textutils- Light Mode';
    }
  }
  return (
    
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color}  colorChange={colorChange}/>
      <Alert alert={alert}/>
      <div className="container">
       {/* <Routes>
          <Route exact path="/about" element={<About/>} >
          </Route>
          
          <Route exact path="/" element={}> */}
          <TextForm showAlert={showAlert} heading="Enter the next to analyze" mode={mode} mycolor={color}/>
          
          {/* </Route>
         </Routes> */}
        
      
      </div>
       {/* </Router> */}
    </>
  );
}

export default App;