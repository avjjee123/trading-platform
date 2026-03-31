import {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

const Logout=()=>{
    const navigate = useNavigate(); 
     const [Cookies,setCookie, removeCookie] = useCookies(["user"]);
    
  useEffect(()=>{
     const verifyCookie=async()=>{
        const {data}=await axios.post(
            "http://localhost:3002",
            {},
            {withCredentials:true}
        ); 
        const {success,message}=data;
        console.log(Cookies.user); 
        if(success)
        {  removeCookie("user",{path:"/"});
           navigate("/");   
        }
        else{
         navigate("/signup"); 
             }
     };
     verifyCookie();
  },[Cookies,navigate,removeCookie]); 
  return (
    <>
        
    </>
  )
}

export default Logout; 
