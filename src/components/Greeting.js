import React from 'react';
import { useState } from 'react';

export default function Greeting() {
    const [changetext,setchangetext]=useState(false);
    const changetexthandler=()=>{
        setchangetext(true);
    }
  return (
    <div>
      <h1>helloworld</h1>
      {!changetext&& <p>its good to see you </p>}
      { changetext&&<p>changed</p> }
      <button onClick={changetexthandler}>change text</button>
    </div>
  )
}
