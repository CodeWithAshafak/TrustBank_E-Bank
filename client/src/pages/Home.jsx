import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import "../css/Home.css"
import cr1 from "../images/crousel1.png"
import cr2 from "../images/crousal2.png"
import cr3 from "../images/cr3.jpg"
import cr4 from "../images/cr4.png"
import cr5 from "../images/cr5.jpg"
import cr6 from "../images/cr6e.jpg"
import cr7 from "../images/cr7.jpg"
import di from "../images/di.jpg"




const Home = () => {
  return (
    <>
   


   
    <Carousel >
      <Carousel.Item>
        <img src={cr7} className='crimage' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={cr2} className='crimage'   />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img src={cr1} className='crimage' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
          <img src={cr4} className='crimage'  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img src={cr5} className='crimage' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={cr6} className='crimage' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>

   

     <Container fluid >
     <Row id='containerWrapper'>


    
      <Col>
       <img src={di} id='digital'/>
      </Col>
      <Col>
         <h1 id='slogan'>
         Experience transparent and seamless banking with security at every step.
         </h1>
      </Col>
     
     </Row>


     </Container>
    
    </>
  )
}

export default Home