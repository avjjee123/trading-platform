import React from 'react';
import {useState,useEffect} from "react"; 
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
function OpenAccount() {
   const [cookies,setCookie,removeCookie]=useCookies([]);
   const [visible,setvisible]=useState(true);  
   useEffect(()=>{
     if(cookies.user)
     {
      setvisible(false);  
     }
   },[cookies]); 
    return (
        visible?(<div className='container mb-5'>  
           <div className='row'>
            <div className='text-center'>
               <h1 className='mt-5'>Invest in everything</h1>
              <p>Online platform to invest in stocks, derivatives,
              mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary p-2 fs-lg-5 fs-sm-0.5' style={{width:'20%', margin:'0 auto'}}>
            <Link to="signup" style={{color:"blue",textDecoration:"none"}}
              >Signup/Login</Link>
            </button> 
            </div>
           </div>
        </div>):null);
}

export default OpenAccount;