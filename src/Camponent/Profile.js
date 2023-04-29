import React from 'react'
import "./profile.css"

function Profile() {
  const shoot = () => {
    alert("Created");
    
  }
  return (
    <div>
     <div className='container'>
      <img className='image' src='https://images.meesho.com/images/marketing/1661417516766.webp' alt=''/>
    
     <div className='enter'>
     <input placeholder='Enter Name'></input><br/>
     <input placeholder='Enter Email' type='email'></input><br/>
     <input placeholder='Password' type='password'></input><br/>
     <button className='submit' onClick={shoot}>Create Profile</button>
        </div>
        </div>
        </div>
  )
}

export default Profile
