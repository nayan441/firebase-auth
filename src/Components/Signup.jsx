import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthUserContext';
import { Alert } from 'bootstrap';

const Signup = () => {
    const { signUp } = useUserAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const navigate = useNavigate()
    const onSubmit = async (e)=>{

        e.preventDefault()
        try{
            await signUp(email,password)
            setError("")
            navigate("/")
        }catch(error){
            setError(error.message)
        }
    }
    return (
        <>
            <h1> Signup </h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"

                    />
                </Form.Group>
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
                <Button variant="primary" type="submit" onClick={(e)=>{onSubmit(e)}}>
                    Signup
                </Button>
            </Form>
            <div style={{ display: "flex",justifyContent: "center"}}>
                <div className='m-2'>
                    <Link to="/">Link to Login Page</Link>
                </div>
                <div className='m-2'>
                    <Link to="/home">Link to Home Page</Link>
                </div>
            </div>
        </>
    )
}

export default Signup;

