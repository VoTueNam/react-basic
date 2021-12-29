import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoList, onCheckBtnClick }) {

    return (
        <div>
            {todoList.map((todo,index) => (
                <Todo key={index} todo={todo} onCheckBtnClick={ onCheckBtnClick }></Todo>
            ))}
        </div>
    )
}

