

export function Login(){

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light w-25">
            <div>
                <form className=" p-1">
                    <h3>Login Page</h3>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-warning">Login</button>
                </form>
            </div>

        </div>
    );

}