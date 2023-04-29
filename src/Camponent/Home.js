import React from 'react'
import "./home.css";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import Allproducts from '../Allproducts';

  

// ComponentDidMount is used to
// execute the code 


function Home() {
  

  return (
    <div>
      <div className='mater'>
        <div className='data'>
      <h1>Lowest Prices</h1>
          <h1>Best Quality Shopping</h1>
          <p>25+ Crores worth Rewards | 500 Winners every Hour</p>
          </div>
          <img
            src="https://images.meesho.com/images/marketing/1651230340362.webp"
            alt=""
          />
    </div>
   
      
      <div id="h1-line">
        <hr />
        <h1>Top Categories to choose from</h1>
        <hr />
      </div>
      <div className="image-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        
      </div>
      <div id="h1-line2">
        <hr />
        <h1>Top Products for You!!!</h1>
        <hr />
      </div >
     
       
               <Allproducts/>
      </div>
     
    
     

       )
        }
        

export default Home