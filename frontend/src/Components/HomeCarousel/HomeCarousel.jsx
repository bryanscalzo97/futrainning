import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function HomeCarousel () {
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Forma parte de la comunidad #1 de futbol</h3>
      <p>Anotate a un partido en el horario que mejor te quede</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default HomeCarousel
