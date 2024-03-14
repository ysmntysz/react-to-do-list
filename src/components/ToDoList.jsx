import React from 'react'
import ToDoListItem from "./ToDoListItem"

function ToDoList( {items, onDelete, onCompleted}) {
    return (
        <>
            <div className="list-items d-flex flex-column gap-3">
                {items.map((item) => { 
                    return (
                        <ToDoListItem 
                            key={item.id} 
                            item={item} 
                            onDelete = {onDelete} 
                            onCompleted={onCompleted}
                        />
                    )
                })}
            </div>   
        </>
    )
}

export default ToDoList
