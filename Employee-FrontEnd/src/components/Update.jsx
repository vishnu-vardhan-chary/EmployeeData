import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function Update(){

    const param = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({ name: '', address: '', salary: 0 });

    const[data,setData] = useState();

    useEffect(()=>{
         axios.get(`http://localhost:9696/api/users/${param.id}`)
        .then((response)=>{
            setEmployee(response.data)
            setData(response.data)
        })
        .catch((error) => {
        console.error('Error fetching users:', error);
      });
    },[])

    const formik = useFormik({
        initialValues:{
            name:employee.name,
            address:employee.address,
            salary: parseFloat(employee.salary)
        },
        onSubmit:(employee)=>{
            
            if(data.name == employee.name && data.address == employee.address && data.salary == employee.salary){
                alert('cannot update change data')
            }
            else{
                
            axios.put(`http://localhost:9696/api/users/${param.id}`,employee)
            .then(()=>{
                alert('Employee Edited Successfully')
                navigate('/')
            })
            }
        },
        enableReinitialize:true
    });

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
           <div className=" bg-light text-dark w-25 border border rounded-2" style={{height:'350px'}}>
            <h2 className="px-3 mt-1">Update Employee</h2>
            <form onSubmit={formik.handleSubmit} className="mt-2 p-3">
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control"/></dd>
                    <dt>Address</dt>
                    <dd><input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control"/></dd>
                    <dt>Salary</dt>
                    <dd><input type="text" name="salary" value={formik.values.salary} onChange={formik.handleChange} className="form-control"/></dd>
                </dl>
                <button className="btn btn-success me-3" type="submit">Save</button>
                <Link to={'/'} className="btn btn-primary">Cancel</Link>
            </form>
            </div> 
        </div>
    );
}