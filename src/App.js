import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Switch from './components/Switch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';




function App() {

  const [btn, newbtn] = useState('Toggle Dark Mode')
  const [buttons, newButtons] = useState("dark")
  const [field, newField] = useState('white')
  const [fieldText, newFieldText] = useState('black')
  const [navbar, newNavbar] = useState("dark")









  const [style, newStyle] = useState(
    {
      backgroundColor: 'white',
      color: 'black',
      minHeight: '100vh'
    
    
    }
  )
  const darkMode = () => {
    if (style.backgroundColor === 'white') {
      newStyle({
        backgroundColor: '#212529',
        color: 'white',
        minHeight: '100vh',
        
      })
      newbtn(" Toggle Light Mode")
      newButtons("light")
      newField("#212529")
      newFieldText('white')
      newNavbar("light")
    }
    else {
      newStyle({
        backgroundColor: 'white',
        color: 'black',
        minHeight: '100vh'
      })
      newbtn("Toggle Dark Mode")
      newButtons("dark")
      newField("white")
      newFieldText('black')
      newNavbar("dark")
    }
  }



  return (
 

      
<>
        

    

      <Router>
      < div  style={style} >
      <Navbar title="textEditor" about="About" navbar={navbar} /> 
      <div  className='body'>
      <Switch darkMode={darkMode} btn={btn} />
      <div className='container my-5' >
      <Routes>
      <Route path="/" element={<TextArea label="Enter the text here" buttons={buttons} field={field} fieldText={fieldText}/>}/>
      <Route path="/about" element={<About/>}/>
      
      </Routes>
      </div>
      </div>
      </div>
      </Router>
      </>
   
     
  
    
  );
}


export default App;
