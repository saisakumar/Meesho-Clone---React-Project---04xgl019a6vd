import React from 'react'
import "./navbar.css";
import {Link} from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
};
const downdo = () => {

    window.location.href = "https://play.google.com/store/apps/details?id=com.meesho.supply";

}
function Navbar() {
  return (
    <div>
      <ul className='nav'>
        <li className='logo'><Link to="/" style={linkStyle}>meeshoo</Link></li>
      <li className='hm'>
      <Link to="/">|</Link>
      </li>
      <li className='become'>Become Suplyer</li>
      <li>|</li>
      <li >
     
      <button className='download'  onClick={downdo}> <BsFillPhoneFill/>Download</button>
      </li>
      <li>|</li>
      <li className='profile'>
        <Link to="/profile"style={linkStyle}><CgProfile/>Profile</Link>
      </li>
      <li>|</li>
      <li className='cart'>
      <Link to="/Cart"style={linkStyle}><AiOutlineShoppingCart/>Cart</Link>
      </li>
    </ul>
    
    </div>
  )
}

export default Navbar
//onclick move to playstore meeshoo website in reactjs?


