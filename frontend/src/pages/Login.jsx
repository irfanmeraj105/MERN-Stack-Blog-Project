import { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../services/Endpoint";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from '../redux/authSlice';

export default function Login() {
 const navigate=useNavigate()
    const dispatch=useDispatch()

   const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const request = await post('/auth/login', value);
            const response = request.data;
            console.log("login success", response);
           if (request.status==200) {
            dispatch(setUser(response.user));
            navigate('/')
            toast.success(response.message)

           }
        } catch (error) {
            console.error("login error", error);
            if (error.response && error.response.data && error.response.data.message) {
                // setError(error.response.data.message); // Set error message from server response
                toast.error(error.response.data.message)
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };


  return (
    <>
      <section className="">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
          <a
            href="#"
            className="mb-4 text-dark text-decoration-none d-flex align-items-center"
          >
           
            <Link to={"/"}>
              {" "}
              <span className="h4 mb-0 fw-bold">CodeByIrfanMeraj</span>
            </Link>
          </a>
          <div className="card shadow-sm w-100" style={{ maxWidth: "400px" }}>
            <div className="card-body p-4">
              <h1 className="h5 mb-4 fw-bold text-dark">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* Optional content can be added here */}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign in
                </button>
              </form>
              <p className="mt-3 mb-0 text-muted">
                Don’t have an account yet?{" "}
                <Link to="/register" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
