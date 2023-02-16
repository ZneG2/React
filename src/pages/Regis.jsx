import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";


const Regis = () => {
    const [err, setErr] = React.useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const avatar = e.target[3].files[0];
        try
        {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
        }
        catch(err)
        {
            setErr(true);
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Pro Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password" />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src="img/add-img.png" alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Heyyyy, fvk u, u can't regis this email</span>}
                </form>
                <p>Do you have an accout? Login</p>
            </div>
        </div>
    );
};

// Add Captcha

export default Regis;