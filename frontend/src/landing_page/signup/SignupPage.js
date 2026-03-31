import React from 'react';
import axios from "axios"; 
import {ToastContainer,toast} from "react-toastify"; 
import {useState,useReducer} from "react";  
import { useNavigate } from 'react-router-dom'; 
import {useCookies } from "react-cookie"; 
import { Link ,useLocation} from 'react-router-dom';
import sty from "./Form.module.css";  
import Logout from '../logout';


let data={
     name:"",
     email:"",
     password:"",
}
function get_ans(state,target){
    return( 
        {...state,[target.type]:target.value}  
    )
}

function Signup() {   
    
    const navigation=useNavigate(); 
     const [state,label]=useReducer(get_ans,data);
   const [signup,getsignup]=useState(true);
   const [login,getlogin]=useState(false);  
   const [dis,getdis]=useState(0); 
   const [Cookies,setCookie,removeCookie]=useCookies(["user"]);  
   const location=useLocation(); 
   
   const get_login=()=>{
        getsignup(false);
        getlogin(true); 
        getdis(1); 
   }
   function get_signup(){ 
        getsignup(true); 
        getlogin(false); 
        getdis(0); 
   }
    
    const handleSuccess=(msg)=>{
      toast.success(msg,{
        position:"bottom-right", 
      });
    }
    const handleError=(err)=>{
       toast.error(err,{
        position:"bottom-left", 
       }); 
    }

   const handleSubmit=async(e)=>{
       e.preventDefault();
       try{
          const {data}=await axios.post(
            "http://localhost:3002/signup",
            state,    
            {withCredentials:true} 
          ); 

          const {success,message,user}=data;   
          console.log(success); 
          if(success) 
          {   
             handleSuccess(message);
             setCookie("user",user,{
              path:"/",
              maxAge:3*24*60*60,
              expiresAt:3*24*60*60, 
             }); 
             setTimeout(()=>{
                navigation("/");
             },1000);      
          }
          else{
            handleError(message);  
          }
       }
       catch(err)
       {  
           handleError("something went wrong"); 
           console.log(err.message);  
       }  
   }  
   const handleLoginSubmit=async(e)=>{
    e.preventDefault();
    try{
        const {data}=await axios.post(
          "http://localhost:3002/login",
          state,
          {withCredentials:true},   //both token and user cookie is present 
                                    //both backend and frontend
        ); 
        const {message,success,user}=data;
        if(success) 
        {
          handleSuccess(message);
          setCookie("user",user,{
            maxAge:3*24*60*60,
            expiresAt:3*24*60*60, 
          });  
          console.log(Cookies.user); 
          setTimeout(()=>{
            navigation("/");
          },1000);
        } 
        else{
          handleError(message); 
        }  console.log(Cookies.user); 
    }
    catch(e)
    {
        handleError(e.message); 
    }
   }
    return (<>
     <div className={sty.container}> 
           <div className={sty.signup} 
           style={{transform:`translateX(-${dis*18}rem)`}}>  
                    <button className={sty.loginBtn}  
              onClick={get_login}>login</button>
              <form action="" onSubmit={handleSubmit}> 
                <input type="text" id="name" placeholder="Username"
                onChange={(event)=>{label({value:event.target.value,type:"name"}) }} />
                <br></br>
                <input type="email" id="email" placeholder="Email"
                onChange={(event)=>{label({value:event.target.value,type:"email"})}}></input>
                <br></br> 
                <input type="password" id="pass" placeholder="password" 
                onChange={(event)=>{label({value:event.target.value,type:"password"})}}></input>
                <button className={sty.submit} type="submit">sumit</button>
              </form>    
            </div>
            <div className={sty.login}
             style={{transform:`translateX(-${dis*18}rem)`}}> 
                <button className={sty.signupBtn} 
                 onClick={get_signup}>signup</button> 
                 
              <form action="" onSubmit={handleLoginSubmit}>   
               <input type="email" id="email" placeholder="Email"
                onChange={(event)=>{label({value:event.target.value,type:"email"})}}></input>
                <br></br>
                <input type="password" id="pass" placeholder="password" 
                onChange={(event)=>{label({value:event.target.value,type:"password"})}}></input>
                <button className={sty.submit}>sumit</button>
              </form>   
            </div>   
          </div> 
       <ToastContainer/> 
    </>);
} 

export default Signup;  