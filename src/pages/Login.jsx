import React from "react";
// import Rive from "@rive-app/react-canvas";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Pro Chat</span>
                <span className="title">Login</span>
                <form>
                    
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password" />
                    
                </form>
                <button className="loginBtn">Login</button>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    );
};
export default Login;
