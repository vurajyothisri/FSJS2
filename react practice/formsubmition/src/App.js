
import react,{useEffect,useState} from 'react'
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from "./components/todos"
import TodoForm from './components/todoform';
function App() {
  const [todos,settodos]=useState([])
  useEffect(()=>{
 const localtodos=localStorage.getItem("todos")
 console.log({localStorage})
 if(localtodos){
  settodos(JSON.parse(localtodos))
 }

  },[]);
  const addtodos=async (todo)=>{
    settodos([...todos,todo])
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const markComplete=id=>{
    settodos(todos.filter(todo=>todo.id!==id))
  }
  return (
   <>
     <Container fluid>

      <h1>Todo</h1>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm addtodos={addtodos}/>
     </Container>
   </>
  );
}

export default App;
