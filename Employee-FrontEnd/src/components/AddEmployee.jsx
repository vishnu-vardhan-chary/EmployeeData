import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";


export function AddEmployee(){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            address: '',
            salary: parseFloat(0)
        },
        onSubmit: (employee)=>{
            axios.post('http://localhost:9696/api/users',employee)
            .then(()=>{
                alert('User successfully Added')
                navigate('/')
            })
            console.log(employee);
        }
    })
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="w-25 border border rounded-2 p-3 bg-light text-dark">
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" name="name" onChange={formik.handleChange} className="form-control"/></dd>
                        <dt>Email</dt>
                        <dd><input type="text" name="email" onChange={formik.handleChange} className="form-control"/></dd>
                        <dt>Address</dt>
                        <dd><input type="text" name="address" onChange={formik.handleChange} className="form-control"/></dd>
                        <dt>Salary</dt>
                        <dd><input type="text" name="salary" onChange={formik.handleChange} className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-info me-3" type="submit">Submit</button>
                    <Link to={'/'} className="btn btn-secondary">Cancel</Link>
                </form>
            </div>
        </div>
    );
}