import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
const FilterFilm = ({data}) => {
 const [filtre,setFiltre]=useState({SearchByTitle:"",SearchByRating:""})

console.log(filtre)
const changeHandler =(e)=>{
   setFiltre({...filtre,[e.target.name]:e.target.value})
}
 const FilterHandler=(e)=>{
  e.preventDefault()
  data({filtre})
   console.log({filtre})
 }
  return (
    <div>
<Navbar className="bg-body-tertiary justify-content-between">
      <Form onSubmit={FilterHandler}>
          <Form.Control
            placeholder="Search By Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="SearchByTitle" onChange={changeHandler}
          />
     
        
         
            <Form.Control
              type="text"
              placeholder="Search By Rating"
              className=" mr-sm-2"
              name="SearchByRating"
              onChange={changeHandler}
            />
         
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        
      </Form>
    </Navbar>

    </div>
  )
}

export default FilterFilm