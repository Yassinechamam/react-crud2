import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }

    const toggleComplete = (id) => {
      setTodos(todos.map((todo) => {
        return (todo.id === id  ?  {...todo, completed: !todo.completed} : todo)
      }))
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => {
        return (todo.id !== id );
      }))
      
    }

    const editTodo = (id) => {
      setTodos(todos.map((todo) => {
        return (todo.id === id  ?  {...todo, isEditing: !todo.isEditing} : todo)
      }))
    }

    const editTask = (task, id) => {
      setTodos(todos.map((todo) => {
        return (todo.id === id  ?  {...todo, task, isEditing: !todo.isEditing} : todo)
      }))
    }
    return (
        <div className="TodoWrapper">
            <h1>-- Get Thinks Done -- </h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((elt) => {
              
              return (elt.isEditing ? (<EditTodoForm editTask={editTask} task={elt}/>) : 
              (<Todo task={elt} toggleComplete={toggleComplete} deleteTodo ={deleteTodo} editTodo={editTodo}/>));
                
                
            }) }
            
        </div>
    );
}