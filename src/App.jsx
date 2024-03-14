import React, { useState } from 'react'
import './assets/default.css'
import ToDoList from "./components/ToDoList"
import ToDoListAdd from "./components/ToDoListAdd"

function App() {

  const [items, setItems] = useState([])

  const createItem = (title) =>{
    const updatedItems = [
      ...items,
      {
        id: Math.round(Math.random() * 99), 
        title,
        completed : false
      }
    ];
    setItems(updatedItems);
    console.log("",updatedItems)

  };

  const deleteById = (id) =>{
    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };

  const completedById = (id) => {
    const updatedItems = items.map((item) => {
      if(item.id === id){
        return{
          ...item,
          completed : !item.completed,
        };
      }
      return item
    })
    setItems(updatedItems)
    console.log("",updatedItems)
  }

  return (
    <>
    <div className="to-do-app">
      <div className="container">
        <div className="row justify-content-center gy-5">
          <div className="col-12 text-center text-white">
            <h2>To Do List</h2>
          </div>
          <div className="col-12">
            <ToDoListAdd onCreate={createItem}/>
          </div>
          <div className="col-12">
            <ToDoList items = {items} onDelete = {deleteById} onCompleted={completedById}/>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
