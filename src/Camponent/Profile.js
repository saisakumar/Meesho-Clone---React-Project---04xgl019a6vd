import React, { useState } from "react";
import "./profile.css"

const Profile = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
          <div className="pp">
            <img  className='image' src='https://images.meesho.com/images/marketing/1661417516766.webp' alt=''/>
          </div>
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="em">
                <label htmlFor="email">email:   </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br></br>
                </div>
                <div className="pa">
                <label htmlFor="password">password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br></br>
                </div>
                <button type="submit" className="b">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Profile;
