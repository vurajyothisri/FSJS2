import Two from "./two.js"

import React, { useState } from 'react';

const One = () => {
 const [value,updatevalue]=useState("")
 const [send,updatesend]=useState("")
 const sendvalue=(e)=>{
updatevalue(e.target.value);
 }
 const handlesubmit=(e)=>{
    e.preventDefault()
    updatesend(value)
    updatevalue("")
 }

  return (
    <div>
      <form>
        <input placeholder="enter" value={value} onChange={sendvalue}/>
        <button onClick={handlesubmit}>Click me to see meassage</button>
      </form>
      <Two data={send} />
    </div>
  );
};

export default One;