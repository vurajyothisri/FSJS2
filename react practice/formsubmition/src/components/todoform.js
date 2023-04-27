import React,{useState} from "react";
import {
    FormGroup,
    Input,
    InputGroup,
    // InputGroupAddon,
    Button,
    Form,
    Container

}from "reactstrap"

import {v4} from "uuid"
const TodoForm=({addtodos})=>{
    const[todostring,settodostring]=useState("")

    const handlesubmit=e=>{
        e.preventDefault()
        if(todostring===""){
            return alert("please fill")
        }
        const todo={
        todostring,
            id:v4()
        }
        addtodos(todo)
        settodostring("")
    }
    return(

        <Form onSubmit={handlesubmit}>
        <FormGroup>
          <InputGroup>
          <Input type="text"
          name="todo"
          id="todo"
          placeholder="enter to do"
          value={todostring}
          onChange={e=>settodostring(e.target.value)}/>
          {/* <InputGroupAddon addonType="prepend"></InputGroupAddon> */}
          <Button
          
          >Add Todo</Button>
          </InputGroup>
        </FormGroup>
       </Form>
   
    )
    
      

}
export default TodoForm