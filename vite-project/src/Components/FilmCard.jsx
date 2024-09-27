import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const FilmCard = ({film}) => {
  return (
    <>
    <div>

      <Card style={{ width: '30rem', margin:'10px'}}>
      <Card.Img variant="top" src={film.PosterUrl} />
      <Card.Body>
        <Card.Title> {film.Title} </Card.Title>
        <Card.Text>
          {film.Description}
        </Card.Text>
        <Card.Title>Rating: {film.Rating}</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default FilmCard