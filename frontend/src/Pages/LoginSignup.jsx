import React, { useState } from 'react'
import './CSS/LoginSignup.css';
import logo_img from '../Components/Assets/logo.png';
import { Link } from 'react-router-dom';

const LoginSignup = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const login = async () => {
        console.log("Login btn clicked", formData);
        let responseData;
        await fetch("http://localhost:4000/login",{
            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData=data)

        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }
    const signup = async () => {
        console.log("signup btn clicked", formData);
        let responseData;
        await fetch("http://localhost:4000/signup",{
            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((resp) => resp.json()).then((data) => responseData=data)

        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    return (
        <div className='body'>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={logo_img} alt="" />
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Log in</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <i className="fas fa-envelope"></i>
                                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-lock"></i>
                                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Enter your password" />
                                </div>
                                <div className="text"><Link to="#" className='forgot_pass'>Forgot password?</Link></div>
                                <div className="button input-box">
                                    <input onClick={() => { login() }} type="submit" value="Log-in" />
                                </div>
                                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                            </div>
                        </div>
                        <div className="signup-form">
                            <div className="title">Sign up</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <i className="fas fa-user"></i>
                                    <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Enter your name" />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-envelope"></i>
                                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-lock"></i>
                                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Enter your password" />
                                </div>
                                <div className="button input-box">
                                    <input onClick={() => { signup() }} type="submit" value="Sign Up" />
                                </div>
                                <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;