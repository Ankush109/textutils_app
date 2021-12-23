import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick =()=>{
        console.log("uppercase was clicked!");
        let newtext =text.toLocaleUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase" ,"success")
    }
    const handleonchange =(event)=>{
        console.log("onchange!");
        setText(event.target.value);
    }
    const handleup =(event)=>{
        console.log("onchange!");
        let neotext =text.toLowerCase();

        setText(neotext);
    }
    const cleartext =(event)=>{  
     let neotext =""
     setText(neotext);
    }
    
    const[text,setText] = useState("enter text here!");
    // setText("")
    return (
        
       <><div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea name="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}id="myrow" rows="10" cols="200"></textarea>
                <input type="email" className="form-control" rows="3" columns="7" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <button className='btn btn-primary' onClick={handleupclick}>convert to uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleup}>convert to lowercase</button>
            <button className='btn btn-primary mx-2' onClick={cleartext}>clear text</button>
        </div>
        
        <div className='constainer my-2'>
            <h1>your text summary</h1>
            <p>{text.split("/\s+/").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length } Minutes used to read by the user :) </p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
            </>

    )
 }