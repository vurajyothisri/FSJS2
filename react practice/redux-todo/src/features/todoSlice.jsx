import {createSlice} from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
const initialState={
    todos:[{id:1,text:"learn js"},
{id:2,text:"difficult"}],

}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),//generate uniue id,
                text:action.payload

            };
            state.todos.push(todo)


        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        edittodo:(state,action)=>{
        
        }
    }
})
export const {addTodo,removeTodo,edittodo}=todoSlice.actions;
export default todoSlice.reducer