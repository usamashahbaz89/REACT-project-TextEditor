import React from 'react';
import { useState } from 'react';



export default function TextArea(props) {

    
    const [text, setText] = useState('');
    const upperCase = () => {

        let upText = text.toUpperCase();
        setText(upText)
       
    }
    const lowerCase = () => {

        let lowText = text.toLowerCase();
        setText(lowText)
        
    }
    const clear = () => {

        let clrText = ('');
        setText(clrText)
        
    }
    
    const copy = () =>{
        
        navigator.clipboard.writeText(text);
        alert("Copied")
        
        
    }
    const replace = () => {
        
         let a = prompt("Enter the word/sentence to be replaced (case sensitive) ");
        

        if(text.includes(a)){
        let b = prompt("Enter the new word");
        if (text.includes(a)){
            let result = text.replaceAll(a, b)
            setText(result)
            alert("Replaced")
            
        }
        
    }else{
        alert("Word not found")
    } 
}

 

   

    

    const handleChange = (event) => {
        setText(event.target.value)
    }
    


    return (

        <>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" style={{backgroundColor:`${props.field}`, color:`${props.fieldText}`}} value={text} onChange={handleChange} placeholder="Some text here" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button  className={`btn btn-${props.buttons} mx-3`} onClick={upperCase}>Uppercase</button>
            <button  className={`btn btn-${props.buttons} mx-3`} onClick={lowerCase}>Lowercase</button>
            <button  className={`btn btn-${props.buttons} mx-3`} onClick={copy}>Copy All</button>
            <button  className={`btn btn-${props.buttons} mx-3`} onClick={clear}>Reset All</button> 
            <button  className={`btn btn-${props.buttons} mx-3`} onClick={replace}>Replace Text/Sentence</button>
            
              {/* <button  className={`btn btn-${props.buttons} mx-3`} onClick={search}>Search</button>   */}
          

             <div className="container my-5 ">
                
                 <p>Word Count : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p> 
            </div>

        </>
    )
}
