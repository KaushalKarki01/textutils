import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase','success');
  };

  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase','success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mycolor}} >
        <h1 className="mb-4">{props.heading}</h1>
       
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor:props.mycolor}}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} style={{backgroundColor:props.mycolor}}>
          Convert to Lowercase
        </button>
      
      </div>

      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text===""?0:text.split(" ").length} words and {text.replace(/ /g,"").length} characters</p>
        
        <p>{0.008 * text.trim().length} minutes required to read</p> 
      </div>
    </>
  );
}
