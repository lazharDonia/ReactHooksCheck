import React from 'react'
import FilmCard from './FilmCard'

const FilmList = ({film}) => {
  return (
    <div>
        {film.map((el)=> <FilmCard film={el}/>)}
    </div>
  )
}

export default FilmList