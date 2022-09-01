import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
function Carouse() {
    return (
        <div style={{ display: 'block', width: 1270}}>
       
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
  src="https://image.shutterstock.com/image-photo/putrajaya-malaysia-may-15-2016-260nw-420864535.jpg"
              alt="Image One"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
  src="https://image.shutterstock.com/image-photo/kuala-lumpur-malaysia-15-april-260nw-1077991043.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
   
}

export default Carouse;