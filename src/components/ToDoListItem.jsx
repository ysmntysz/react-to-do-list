import React from 'react'

function ToDoListItem({item, onDelete, onCompleted}) {

  const handleDeleteClick = () =>{
    onDelete(item.id)
  }
  const handleCompletedClick = () => {
    onCompleted(item.id)
  };

  return (
    <div className='list-item d-flex justify-content-between alig-items-center'>
      <div className="list-item-title">
        <h2 className={`todo-item ${item.completed ? "completed" : ""}`}>{item.title}</h2>
      </div>
      <div className="list-item-actions d-flex gap-3">
        <button onClick={handleCompletedClick}><span><i className="fa-solid fa-check"></i></span></button>
        <button onClick={handleDeleteClick}><span><i className="fa-solid fa-xmark"></i></span></button>
      </div>
    </div>
  )
}

export default ToDoListItem
