import React, { useState } from 'react'
import PropTypes from 'prop-types'


TodoListItem.propTypes = {
    todo: PropTypes.array.isRequired,
}

function TodoListItem({todo,id,removeTodo,checkCompleted,handleEditnews}) {
    const[isShow,setShow]=useState(false);
    const[onEdit, setonEdit]=useState(false);
    const[edit,setEdit]=useState(todo.text);
    //change color
    const onhandlechange =()=>{
            checkCompleted(id);
            setShow(!isShow)
    }
    //show form edit
    const handdleonEdit = ()=>{
        setonEdit(true);
    }
    // save btn
    const handleonSave = id=>{
       setonEdit(false);
       if(edit){
           handleEditnews(edit,id);
       }else{
           setEdit(todo.text);
       }
    }
   if(onEdit){
     return(
         // form edit
         <div className="display list">
             <input type="text" name="" id="" className=" form2" value={edit} onChange={e=>setEdit(e.target
                .value)}/> 
             <img src="https://img.icons8.com/metro/48/26e07f/save.png" className="save" onClick={()=>{handleonSave(id)}}/>

         </div>
     )
   }
   else{
    return (
        // items of every todo
        <div className="display list">
            <div className='text'>
            <p style={{color: todo.isCompleted?'blue':'black'}}
            onClick={onhandlechange} id={id} checked={todo.isCompleted}
            >{todo.text}</p>
            </div>

            <div className="btn-list display">
           <p> {isShow && <img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" onClick={onhandlechange} className="margincheck"/>}</p> 
           <img src="https://img.icons8.com/small/16/26e07f/edit.png" className="edit" onClick={handdleonEdit}/>
           <img src="https://img.icons8.com/small/16/000000/delete-sign.png" className="delete" onClick={()=>removeTodo(id)}/>
            </div>            
        </div>
    )
   }

    
}

export default TodoListItem





