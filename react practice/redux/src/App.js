import React, { useState } from 'react'
import { increament,decreament,increamentByvalue } from './features/counter/counterSlice'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
function App(){
    const [input,setinput]=useState('')
    const count=useSelector((state)=>state.counter.value)
    const dispath=useDispatch()

    return(
       <div className="bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6">
        <div classNmae="space-x-5">
            <input
            type='number'
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigi-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter the number'value={input} onChange={(e)=>setinput(e.target.value)}
            />
            <button
            onClick={()=>dispath(increamentByvalue(+input))}
            
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg
            '>Increamnet By value</button>
        </div>
        <div className="sapce-x--6">
            <button
            onClick={()=>dispath(increament())}
             className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
                increament by 1
            </button>
            <span>{count}</span>
            <button
            onClick={()=>dispath(decreament())}
             className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
                decreament by 1
            </button>
        </div>
       </div>
    )
}
export default App;