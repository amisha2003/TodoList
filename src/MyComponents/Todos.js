import React from 'react'
import {TodoItems} from "./TodoItems";
export const Todos = (props) => {
    return (
        <div className="container">
           <h1 className="text-center">Todos List</h1>
           {props.todos.length===0?"No Todos to Display":
            props.todos.map((todo)=>{
                console.log(todo.Sno);
                return(
                 <TodoItems todo={todo}key={todo.Sno} onDelete={props.onDelete}/>
            )
            })}
        </div>
    )
}
