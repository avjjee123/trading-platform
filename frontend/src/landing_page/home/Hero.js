import React, { use } from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
function Hero() 
{  
  const [cookies,setCookie,removeCookie]=useCookies([]);
   const [visible,setvisible]=useState(true); 
   useEffect(()=>{
     if(cookies.user)
     {
      setvisible(false); 
     }
   },[cookies]); 

  return ( 
     visible?(<div className="container">
      <div className="row text-center mb-5">
        <img src="media/images/kite.png" alt="hero Image" className="mt-5" />
        <h1 className="mt-5">now time to howk</h1>
        <p>now time to honow time to honow time to ho</p>
        <button
          className="btn btn-primary p-2 fs-lg-5 fs-sm-0.5"
          style={{ width: "20%", margin: "0 auto" }}
        >
        <Link to='/signup' style={{color:"blue",textDecoration:"none"}}
        >Signup/login</Link>;
        </button>
      </div>
    </div>):null);
}

export default Hero;
