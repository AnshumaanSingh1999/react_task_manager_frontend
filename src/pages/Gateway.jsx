import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Gateway=()=>{

    return(

        
        <div className="container">
            

        <br></br>

        <div className="signin">
            <h1>Sign In</h1>
            <div className="row">
                <div className="col-sm-2"><b>Email ID</b></div>
                <div className="col-sm-2"><b>Password</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="email" autoComplete="off"/></div>
                <div className="col-sm-2"><input type="password" autoComplete="off"/></div>
                <div className="col-sm-2"><button>Submit</button></div>
            </div>
        </div>

<br></br>

        <div className="signup">
            <h1>Sign Up</h1>
            <div className="row">
                <div className="col-sm-2"><b>Email ID</b></div>
                <div className="col-sm-2"><b>Password</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="email" autoComplete="off"/></div>
                <div className="col-sm-2"><input type="password" autoComplete="off"/></div>
                <div className="col-sm-2"><button>Submit</button></div>
            </div>
        </div>


        </div>
                  

    );
}

export default Gateway;