import React, { useEffect, useState } from 'react';
import "./allpro.css";
function Allproducts() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        });
    }, []);
  
    return (
        
      <div className='App'>

        {data.map((list,id) => (
       <div key={id}>
        <div className='allproducts'>
        <div className='product'>
        <div><img src={list.image} alt="" className="main-img" /></div>
        <p className="product-name">{list.title}</p>
        
        <div className='description'>{list.description}</div>
        <div className='details'>
        <div className='price'>₹ : {list.price} </div>
        <div className='add'>  <button>Add</button> </div>
          </div>
          
      </div>
       </div>
       </div>
        
        ))}
      </div>
      
    );
  }
export default Allproducts
