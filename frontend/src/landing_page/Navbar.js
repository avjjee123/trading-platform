import React from "react";
import {useState,useEffect} from "react"; 
import { useCookies } from "react-cookie";
import {Link} from "react-router-dom";

function Navbar() {
  const [Cookies,setCookies,removeCookie]=useCookies(["user"]);
  return (
      <nav class="navbar navbar-expand-lg bg-white border-bottom" style={{position:'sticky',width:"100%",zIndex:"1000"}}> 
        <div class="container-fluid">   
          <Link class="navbar-brand" style={{width:"30%"}} to="/"> 
            <img src="media/images/logo.svg " style={{width:"80%"}}></img>
          </Link> 
          <button
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             < span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 whole-icon">
              <li class="nav-item">
                {!Cookies.user?(<Link class="nav-link active" aria-current="page" to="/signup"> 
                  Sign up
                </Link>):null}
                {
                  Cookies.user?(<Link class="nav-link active" aria-current="page" to="/signup/logout">LogOut</Link>):null
                }  
              </li> 
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  about
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/product">
                  product
                </Link>
              </li>
                <li class="nav-item">
                 <Link class="nav-link active" aria-current="page" to="/pricing">
                  pricing
                </Link>
              </li>
                <li class="nav-item">
                 <Link class="nav-link active" aria-current="page" to="/support"> 
                  support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
  );
}
export default Navbar;