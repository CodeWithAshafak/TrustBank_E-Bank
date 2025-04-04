import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "../css/Login.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../BASE_URL';
import axios from 'axios';

const Login = () => {
  

    const [input , setInput] = useState({

      email: "",
      account: "",
      password: ""
    })
    const navigate = useNavigate()

    const handleInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInput((PreVal)=>({...PreVal,[name]:value}))
      console.log(input);
    }

    const handleSubmit = async(e)=>{
       e.preventDefault()
      const api =`${BASE_URL}/user/login`
      if (!input.email || !input.account || !input.password) {
        toast.error("Please fill in all required fields.");
        return; 
      }



      try {
        const response = await axios.post(api,input)

        toast.success(response?.data?.msg)
        setInterval(()=>{ navigate('/dash')},6000)
       
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.msg || "An error occurred");
      }
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
        <Form.Control type="text" placeholder="Enter Account Number" name='account' value={input.account} onChange={handleInput}  />
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handleInput} />
      </Form.Group>


      
      <Button variant="primary" onClick={ handleSubmit}>
        Login
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
   
   <ToastContainer />
   </>
  )
}

export default Login