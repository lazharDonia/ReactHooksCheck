import React, { useState } from 'react'

const AddFilm = ({data}) => { 
  const [newfilm, setNewfilm]=useState({Title:" ",Description:" ",Rating:" ",PosterUrl:" "})

   const changeHandler=(e)=>{
    setNewfilm({...newfilm,[e.target.name]:e.target.value})
   }
   const AddHandler=(e)=>{
    e.preventDefault();
    data(newfilm)
    
 }
  return (
    <div>
      <form  onSubmit={AddHandler} >
        <label>Title:</label> 
        <input type="text" name="Title" placeholder="Title" onChange={changeHandler} ></input>
        <label>Description:</label> 
        <input type="text" name="Description" placeholder="Description" onChange={changeHandler} ></input>
        <label>Rating:</label> 
        <input type="text" name="Rating" placeholder="Rating" onChange={changeHandler} ></input>
        <label>PosterUrl:</label> 
        <input type="text" name="PosterUrl" placeholder="PosterUrl" onChange={changeHandler} ></input>
        <button type="submit">Save</button>

      </form>
    </div>
  )
}

export default AddFilm