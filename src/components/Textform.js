import React, {useState} from 'react'
export default function Textform(props) {
  const handleupclick= ()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }

  const handleloclick= ()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }

  const handleclrclick= ()=>{
    let newtext='';
    setText(newtext)
  }

  const handlespaces= ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handlecopyclick= ()=>{
    var text=document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleonchange=(event)=>{
    setText(event.target.value)
  }

  const [text, setText]=useState("");
  return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <div className="mb-3" >
                <h4>{props.heading}</h4>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#04072b':'white', color:props.mode==='light'?'black':'white'}} onChange={handleonchange} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleupclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleloclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleclrclick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handlecopyclick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handlespaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
          <h4>Your Text Summary</h4>
          <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters: {text.length}</p>
          <p>Minutes read: {0.008*text.split(' ').length}</p>
          <h6>Preview</h6>
          <p>{text}</p>
        </div>
      </>
  )
}
