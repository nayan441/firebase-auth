import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthUserContext';


const Login =  () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {logIn} = useUserAuth()
  const navigate = useNavigate();

 
  const onSubmit = async (e)=>{
    e.preventDefault()
    console.log("Login");
    console.log(email,password);
    await logIn(email,password);
    navigate("/home")
  }
  return (
    <>
    <h1> Login </h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}

        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>{onSubmit(e)}} >
        Login
      </Button>
    </Form>



    <div style={{ display: "flex",justifyContent: "center"}}>
                <div  className='m-2'>
                <Link to="/signup">Link to Signup Page</Link>
                </div>
                <div className='m-2'>
                <Link to="/home">Link to Home Page</Link>
                </div>
            </div>

    </>
  )
}

export default Login;


