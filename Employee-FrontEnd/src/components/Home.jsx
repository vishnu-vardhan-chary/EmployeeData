import { useState,useEffect } from "react"
import axios from "axios";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

export function Home(){


    const [users,setUsers] = useState([]);

    function getAllUsers(url){
        axios.get(url)
        .then((response)=>{
            setUsers(response.data);
        })
        .catch((error) => {
        console.error('Error fetching users:', error);
      });
    }

    function handledelete(id,name){
        if(confirm('Are you Sure Want To Delete')){
        axios.delete(`http://localhost:9696/api/users/${id}`)
        .then(()=>{
           alert(`${name} Deleted`);
           getAllUsers('http://localhost:9696/api/users');
        })
        }
    }

    useEffect(()=>{

        getAllUsers('http://localhost:9696/api/users');


    },[]);

    return(
        <div className="container-fluid">

            <NavBar/>
            <Link to={'/addEmployee'} className="btn btn-primary mt-3">Add Employee</Link>
            <div className="mt-2">
            <table className="table table-warning table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((employee)=>(
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.salary}</td>
                                <td><Link to={`/update/${employee.id}`} className="btn btn-warning">Update</Link></td>
                                <td><button className="btn btn-danger" onClick={()=>handledelete(employee.id,employee.name)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
     </div>

    );
}