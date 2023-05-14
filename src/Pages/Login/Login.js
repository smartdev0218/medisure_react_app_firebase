import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  // const { signInWithGoogle, error, success, processLogin, signInWithGithub } = useAuth();
  const { signInWithGoogle, error, success, processLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="p-5 shadow-lg rounded-3">
        <h1 className="text-primary mb-4 text-center">Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input onBlur={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="text-danger mb-3">{error}</div>
          <div className="text-success mb-3">{success}</div>
          <button
            onClick={() => {
              if (email && password) {
                processLogin(email, password);
              }
            }}
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign in
          </button>
        </form>
        <h6 className="text-center mt-3">Or Login with</h6>
        {/* <div className="row row-cols-2 g-3 mt-2"> */}
          <div className="col text-center">
            <button onClick={signInWithGoogle} type="button" className="btn btn-primary">
              <i className="fab fa-google text-white"></i>
            </button>
          </div>
          {/* <div className="col text-center">
            <button onClick={signInWithGithub} type="button" className="btn btn-primary">
              <i className="fab fa-github text-white"></i>
            </button>
          </div> */}
        {/* </div> */}

        <div className="mt-4">
          New user?{" "}
          <Link to="/register" className="text-decoration-none fw-bold">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
