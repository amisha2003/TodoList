
import React, { useState } from 'react';
import './myCss.css'
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc)
         {
             alert("title or description can not be blank");
         }
         else{
         addTodo(title,desc);
         setTitle("");
         setDesc("");
         }
    }
    return (
        <div className ="cintainer my-3">
            <h1 className="text-center">Add a Todo</h1>
        <form onSubmit={submit}>
  <div className=" add mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
   
  </div>
  <div className=" add mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="add btn-sm btn-success">Add Todo</button>
</form>
        </div>
    )
}
