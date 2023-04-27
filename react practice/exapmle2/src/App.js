import Navbar from "./Components/Navbar.js";
import Herosection from "./Components/Herosection.js"
import React, { useState, createContext } from "react";
export const mycontext=createContext();
function App() {
  const [name,setname]=useState("");
  const [color,setcolor]=useState("");
  const myname=(event)=>{
    setname(event.target.value)
  }

  const mycolor=(event)=>{
    setcolor(event.target.value)
  }
  return (
   <mycontext.Provider value={{name,color}}>
   <Navbar />

   <form>

     <input type={"text"} placeholder="Enter yours name" value={name} onChange={myname}/><br/>
     <input type={"text"} placeholder="enter the color" onChange={mycolor} value={color}/>
   </form>
  <Herosection />
   </mycontext.Provider>
  );
}

export default App;
