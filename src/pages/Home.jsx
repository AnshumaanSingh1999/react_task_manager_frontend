import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home=()=>{


    const navigate=useNavigate()

    const logout=()=>{
        localStorage.clear()
        navigate("/")
      }


    const UserID=localStorage.getItem("UserID")
    const Username=localStorage.getItem("Username")


    return(
        <div className="container">


<div className="row">

<h1 className="col-sm-8">Task Manager</h1>

<h3 className="col-sm-3">Welcome {Username}</h3>

<br></br>
<button className="col-sm-1" onClick={logout}>LogOut</button>



</div>



            
            <div className="addtask">
            <div className="row">
                <div className="col-sm-2"><b>Task</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="text" autoComplete="off"/></div>
                <div ><input type="hidden" value="To be Done"/></div>
                <div className="col-sm-2"><button>Add Task</button></div>
            </div>
            </div>
<hr></hr>


<div className="tasks">
    <table className="table table-hover">
    <thead>
        <tr>
        <th>Task</th>
        <th>Status</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>Kuch</td>
        <td>Kuch</td>
        <td><button>Update Task</button></td>
        <td><button>Delete Task</button></td>
        </tr>
    </tbody>
    </table>



</div>

        </div>
                  

    );
}

export default Home;