import React, { useState } from 'react'
import './Form.css';

const Form = ({setName, setClicks, setImage, handleSave,name,image,clicks}) => {

  const newFormHandler = () => {

  }
  const undoHandler = () => {
    setName("");
    setClicks(0);
    setImage("");

  }
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSave} className="formtag">
        <button onClick={newFormHandler}>New Form</button>
        <div>
          <label htmlFor="catName">Cat Name</label>
          <input type="text" id="catName" onChange={(e) => setName(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="catImage">Cat Image</label>
          <input type="text" id="catImage" onChange={(e) => setImage(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="catClicks">Cat Clicks</label>
          <input type="number" id="catclicks" onChange={(e) => setClicks(e.target.value)} ></input>
        </div>

        
        <div>
          <button type="submit">Save</button>
          <button onClick={undoHandler}>Undo</button>
        </div>
      </form> 
    </div>
  )
}

export default Form
