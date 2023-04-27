import React ,{useState} from "react"
function App() {
  let [count,countset]=useState(0);
   function Countapp(){
    return countset(count+1)
  }
  return (
    <>
      <h1 onClick={Countapp}>hello cicked:{count}</h1>  
      
    </>
  );
}

export default App;
