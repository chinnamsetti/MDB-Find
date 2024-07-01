import React, { useState } from 'react'

function EmployeesForm() {

    let[employees,setEmployees]=useState([]);

    let getEmployeesFromServer=async()=>{
       let reqOptions={
        method:"GET"
       }

       let JSONData=await fetch("http://localhost:1405/employees",reqOptions);
       let JSOData=await JSONData.json();
       setEmployees(JSOData);
       console.log(JSOData);
    }
  return (
    <div>
        <form>
            <button type="button" onClick={()=>{
              getEmployeesFromServer();  
            }}>Get Employees</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>id</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((ele,i)=>{
                  return (
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{ele.id}</td>
                    <td>
                        <img src={ele.profilePic}></img> 
                    </td>
                    <td>{ele.firstName}</td>
                    <td>{ele.lastName}</td>
                    <td>{ele.age}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.email}</td>
                    <td>{ele.department}</td>
                    <td>{ele.country}</td>
                    </tr>
                  )
                })}
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
  )
}

export default EmployeesForm