import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{


    const navigate=useNavigate()

    const[user,setuser]=useState({
        username:"",
        password:""
    })

    const handlechange=(e)=>{
        setuser(prev=>({...prev,[e.target.name]:e.target.value}))
    }



    const handleclick=async (e)=>{

    try{
        
        const resp=await axios.post("http://localhost:8800/signup",user)

        if(resp.data.length==0){
            alert("Invalid Credentials.")
        }
        else {
            if(resp.data=="User Added"){
                console.log(resp)
                alert("User Added Successfully.")
                navigate("/")
            }
            else{
                console.log(resp)
                alert("API not working")
            }
        }
    }
    catch(error){
        console.log(error)
        alert("API Not Working.")  
    }
    }
    
    return(        
        <div className="container">
        <br></br>
        <div className="signup">
            <h1>Sign Up</h1>
            <br></br>
            <div className="row">
                <div className="col-sm-2"><b>Email ID</b></div>
                <div className="col-sm-2"><b>Password</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="email" name="username" id="username" onChange={handlechange} autoComplete="off"/></div>
                <div className="col-sm-2"><input type="password" name="password" id="password" onChange={handlechange} autoComplete="off"/></div>
                <div className="col-sm-1"><button onClick={handleclick}>Sign Up</button></div>
                <div className="col-sm-5 item"><a href="/">Have an account? Sign In.</a></div>

            </div>
        </div>
        </div>
    );
}

export default SignUp;