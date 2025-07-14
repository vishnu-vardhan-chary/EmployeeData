import { Link } from "react-router-dom";
import './nav.css';

export function NavBar(){
    return(
        <div className="container-fluid d-flex justify-content-between align-items-center bg-black text-white">
            <div className="h2">
                Employees.
            </div>
            <div className="input-group w-25">
                <input type="text" className="form-control"></input>
                <button className=" btn btn-primary bi bi-search"></button>
            </div>
            <div>
                <span className="mx-3 bold">Insert</span>
                <span className="mx-3 bold">Update</span>
                <span className="mx-3 bold">Delete</span>
                <span className="mx-3 bold">Search</span>
            </div>

        </div>
    );
}