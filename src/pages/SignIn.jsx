import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn=()=>{

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
        
        const resp=await axios.post("http://localhost:8800/signin",user)
        // console.log(resp)

        if(resp.data.length==0){
            alert("Invalid Credentials.")
        }
        else {
            if(resp.data[0].userid!=""){
                // console.log(typeof(resp))
                // console.log(resp.data[0].userid)
                // console.log(typeof(resp.data[0].userid))


                localStorage.setItem("UserID",resp.data[0].userid)
                localStorage.setItem("Username",resp.data[0].username)

                navigate("/home")
                    
                // alert("Hole")
            }
            else{
                // console.log(resp)
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
        <div className="signin">
            <h1>Sign In</h1>
            <br></br>
            <div className="row">
                <div className="col-sm-2"><b>Email ID</b></div>
                <div className="col-sm-2"><b>Password</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="email" name="username" id="username" onChange={handlechange} autoComplete="off"/></div>
                <div className="col-sm-2"><input type="password" name="password" id="password" onChange={handlechange} autoComplete="off"/></div>
                <div className="col-sm-1"><button onClick={handleclick}>Sign In</button></div>
                <div className="col-sm-5 item"><a href="/signup">Don't have an account? Sign Up.</a></div>
            </div>
        </div>
        </div>
    );
}

export default SignIn;