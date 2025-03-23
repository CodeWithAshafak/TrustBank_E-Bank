import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "../css/Signup.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios'
import BASE_URL from '../BASE_URL';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [input , setInput] = useState({})
  const navigate = useNavigate()
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((PreVal)=>({...PreVal,[name]:value}))
    console.log(input);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const api =`${BASE_URL}/user/useregistration`
    try {
      const response = await axios.post(api,input)
      toast.success(response?.data?.msg)
      setInterval(()=>{ navigate('/login')},6000)
     
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  }
  return (
   <>

     <Container className='signupWrapper'>
      <Row>
       <Col>
       <h3 className="text-center mb-4">Customer Registration Form</h3>
      <Form>

      <Form.Group className="mb-3" controlId="First Name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" name='Fname' value={input.Fname} onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Last Name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" name='Lname' value={input.Lname} onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email address">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={handleInput}  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="Mobile Number">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter Mobile Number" name='mobile' value={input.mobile} onChange={handleInput}  />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Address" name='address' value={input.address} onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="City">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" name='city' value={input.city} onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="State">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="Enter State" name='state' value={input.state} onChange={handleInput}  />
      </Form.Group>

      

     
      

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>


    </Form>



    </Col>
    </Row>
    </Container>
   

    <ToastContainer />
   
   </>
  )
}

export default Signup