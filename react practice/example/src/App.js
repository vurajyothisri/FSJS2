import React from 'react'
import Card from "./card"
import Axios from 'axios'
import {useState} from "react"
// import  { useEffect } from "react"
function App() {
  let [details,setDetails]=useState({})
  let list=['jyothi','sri']
 
  const fetchDetails=async()=>{
    const {data}=await Axios.get('https://randomuser.me/api')
  console.log("Response",data)
   details=data.results[0]
   setDetails(details)
  
  }
 
  return( <>
  <div>App</div>
     <Card myname="jyothi" list={list} details={details} />
     <button onClick={fetchDetails}>Get detailas</button>

  </>
   
  )
}

export default App;
