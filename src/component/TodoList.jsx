import React, { useState } from 'react'
import TodoListItem from './TodoListItem'


function TodoList({todos,removeTodo,checkCompleted,handleEditnews}) {

    
    return (
        <div>
            {todos.map((todo,index) => (
                <TodoListItem
                key={index}
                id={index}
                todo={todo}
                removeTodo={removeTodo}
                checkCompleted={checkCompleted}
                handleEditnews={handleEditnews}
                />
          ))}
        </div>
    )
}

export default TodoList
