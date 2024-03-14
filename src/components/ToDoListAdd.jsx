import React, { useState } from 'react'


function ToDoListAdd({onCreate}) {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        onCreate(title)
        setTitle("")
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <>
            <div className='form-box'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={title}/>
                    <button className='form-button'><i className="fa-solid fa-plus"></i></button>
                </form>
            </div>
        </>
  )
}

export default ToDoListAdd
