import { useState } from 'react'
import './App.css'
import FilmList from './Components/FilmList'
import { data } from './data'
import AddFilm from './Components/AddFilm'
import FilterFilm from './Components/FilterFilm'

function App() {
  const [movie, setMovie]=useState(data)
  const [filtredMovie,setFiltredMovie]=useState({Title:"", Description:"", PosterUrl:"", Rating:""})
  const changeData=(newfilm)=>{
    setMovie([...movie, newfilm])
  }
  const onFiltre=(filtre)=>{ 
      {data.filter((el)=>
       el.Title.toLowerCase().includes(filtre.toLowerCase())===true?setFiltredMovie(filtredMovie,el):""
      )}
    console.log(filtredMovie)}

  return (
    <>
    <FilterFilm data={onFiltre}/>
    <AddFilm data={changeData}/>
    <FilmList film={data}/>
    </>
  )
}

export default App
