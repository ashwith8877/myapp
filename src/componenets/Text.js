import React, {useState} from 'react'

export default function Text(props) {


      const tochangtextupper = ()=> {
        console.log('upper case was clicked'+text);
        let newtext = text.toUpperCase();
        
      setText(newtext);
      props.showalert(" upper case is enabled","success");
    }

    const tochangtextlower = ()=> {
      console.log('upper case was clicked'+text);
      let newtext = text.toLowerCase();
        
      setText(newtext);
      props.showalert(" lower case is enabled","success");
    }

    const copyToClipboard = () => {
  navigator.clipboard.writeText(text)
  props.showalert(" copy to clipboard is done","success");
   
};


    const clear = ()=> {
      console.log('upper case was clicked'+text);
      let newtext = '';
        
      setText(newtext);
      props.showalert(" clear is enabled","success");
    }

    const handleonchange = (event) =>{
      console.log('on changing');
      
      setText(event.target.value);
    }

    const [text, setText] = useState('');  
  return (
    <>
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
  <div className="mb-3" style={{backgroundColor:props.mode==='light'?'grey':'light'}}>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'grey':'light',color:props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={tochangtextupper}>change to upper case</button>
  <button className='btn btn-primary mx-2' onClick={tochangtextlower}>change to lower case</button>
  <button className='btn btn-primary mx-2' onClick={copyToClipboard}>copy to clipboard</button>
  <button className='btn btn-primary mx-2' onClick={clear}>clear</button>



  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>Text words and characters</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{(0.008*text.split(" ").length)} minutes</p>
  </div>

  <div style={{color:props.mode==='dark'?'white':'black'}}>
    <h1> 
    Preview
    </h1>
  <p>{text.length>0?text:'enter some guys!'}</p>

  </div>
    </>
  )
}
