import React, { useState } from 'react'

function Todoform({addTodo}) {
    const[value, setValue] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <div>
           <form action="" onSubmit={handleSubmit} className="display1">
               <input type="text" className="form" placeholder="Add new task in here" value={value} onChange={e=>setValue(e.target.value)}/>
               <div className="circle">
               <p className="btn" onClick={handleSubmit}>+</p>
               </div>
               
               </form> 
        </div>
    )
}

export default Todoform
