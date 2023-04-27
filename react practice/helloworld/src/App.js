
import {useState} from 'react'

// import './App.css';
function SuperHeros(){
  const [hero,sethero]=useState(['superman','spiderman'])
  const [name,setname]=useState(()=>"antman")
  const onAddName=()=>{
    sethero([...hero,name])
    setname("")
  }
  return (
    <div>
      <ul>
        {hero.map((h)=>(
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input type="text"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
      <button onClick={onAddName}>Add value</button>
    </div>
  )
}
function Counter(){
  let [count ,setCount]=useState(10)
  function oneUp(){
     setCount(count+1)
  }
  
  return (
    // <div><button onClick={oneUp}>Count : {count}</button></div>
    <SuperHeros />
  )
}

function App() {
  return (
    <>
       <h1>Hello to react</h1>
    <Counter />
    </>
   
  );
}

export default App;
