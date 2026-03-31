import React from 'react';
import {useState,useEffect} from "react";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Universal() {
   const [Cookies,setCookie,removeCookie]=useCookies([]);
   const [visible,setvisible]=useState(true);
   useEffect(()=>{
      setvisible(false); 
   },[Cookies]);
    return (
        <div className='container px-lg-5 px-2'>   
                 <p className='mb-5 fs-4 text-center '>Want to know more about our technology stack? 
                    Check out the Zerodha.tech blog.</p>
                    <h2 className='text-muted fs-4 mb-3 text-center  '>The Zerodha Universe</h2>
                    <p className='fs-6 mb-3 text-muted mb-4 text-center '>Extend your trading and investment experience eve
                        n further with our partner platforms</p>  
                <div className='row text-center p-lg-5 p-2'>
                    <div className='col-4'>
                        <img src="media/images/zerodhaFundhouse.png" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p> 
                    </div>
                     <div className='col-4'>
                         <img src="media/images/sensibullLogo.svg" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p>
                     </div> 
                      <div className='col-4'>
                         <img src="media/images/sensibullLogo.svg" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p>
                      </div> 
                </div>
                <div className='row p-lg-5 p-2'>  
                   <div className='col-4'>
                        <img src="media/images/zerodhaFundhouse.png" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p> 
                    </div>
                     <div className='col-4'>
                         <img src="media/images/sensibullLogo.svg" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p>
                     </div> 
                      <div className='col-4'>
                         <img src="media/images/sensibullLogo.svg" style={{width:"80%",height:"30%"}} className='mb-3'></img>
                        <p className='text-muted fs-6'>Our asset management venture 
                           that is creating simple and transparent index
                           fund to help you save for your goals.
                        </p>
                      </div> 
                </div>
                {visible?(<div className='row mt-4 mx-lg-5'> 
                        <button className='btn btn-primary p-2 mx-auto fs-5' style={{width:"30%"}}>  
                         <Link to="/signup" style={{color:"blue",textDecoration:"none"}}>Signup/Login</Link>
                        </button>
                </div>):null }
        </div>
     ); 
}

export default Universal;