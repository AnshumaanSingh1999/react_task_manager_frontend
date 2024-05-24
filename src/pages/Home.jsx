import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Home=()=>{

    return(
        <div className="container">

<h1>Task Manager</h1>

            
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
        <th>Task</th>
        <th>Status</th>
        <th>Update</th>
        <th>Delete</th>
    </thead>
    <tbody>
        
        <td>Kuch</td>
        <td>Kuch</td>
        <td><button>Update Task</button></td>
        <td><button>Delete Task</button></td>
    </tbody>
    </table>



</div>

        </div>
                  

    );
}

export default Home;