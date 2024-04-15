import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthUserContext';

const Home = () => {

    const { user, logOut } =useUserAuth()
    const navigate = useNavigate()
    const onSubmit = async (e)=>{
        e.preventDefault()
        console.log("Logout");
        await logOut();
        navigate("/")
    }

    return (
        <>
            <h1>Home Component</h1>
            <p>Hello Welcome {user && user.email}</p>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='m-2'>
                    <button onClick={(e)=>{onSubmit(e)}} > Logout</button>
                </div>
                <div className='m-2'>
                    <Link to="/">Link to Login Page</Link>
                </div>
                <div className='m-2'>
                    <Link to="/signup">Link to Home Page</Link>
                </div>
            </div>

        </>

    )
}

export default Home