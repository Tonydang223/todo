
import "./style/style.css";
import Todoform from "./component/Todoform";
import { useState } from "react";

import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Do the first thing",
      isCompleted: false,
    },
    {
      text: "Do the second thing",
      isCompleted: false,
    },
  ]);
  const addTodo = (text, isCompleted) => {
    const newTodos = [...todos, { text: text, isCompleted: isCompleted }];
    setTodos(newTodos);
  };
  const removeTodo = id=> {
    const newTodos = [...todos]
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };
  const checkCompleted = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo,index) => {
      if (index === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(newTodos);
  };
  const handleEditnews = (edit,id)=>{
    const newTodos = [...todos];
    newTodos.forEach((todo,index) => {
      if (index === id) {
        todo.text = edit;
      }
        setTodos(newTodos);
    })

  }
  return (
    <div className="container">
      <div className="AppTodo">
        <h1> To Do List Application </h1> <Todoform addTodo={addTodo} />
        <div className="todolist">
           <TodoList todos={todos}  removeTodo={removeTodo}
              checkCompleted={checkCompleted} handleEditnews={handleEditnews}/>
        </div>
      </div>
    </div>
  );
}

export default App;
