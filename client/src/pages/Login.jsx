import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "../css/Login.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [input , setInput] = useState({})
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((PreVal)=>({...PreVal,[name]:value}))
    console.log(input);
  }
  return (
   <>

     <Container className='formWrapper'>
      <Row>
       <Col>
       <h2 className="text-center mb-4">Login Form</h2>
      <Form>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handleInput}  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="AccountNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Account Number" name='ACN' value={input.ACN} onChange={handleInput}  />
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"name='password' value={input.password} onChange={handleInput} />
      </Form.Group>


      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
   
   
   </>
  )
}

export default Login