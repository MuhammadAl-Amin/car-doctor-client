import React, { useContext } from 'react'
import registration from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {

  const {createUser} = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name)
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error =>{
          console.log(error.message)
        })




        
      };
  return (
    <div>
              <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-16">
            <img src={registration} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <h1 className="text-4xl font-semibold text-[#444444] text-center mt-16 mb-12">
                Registration now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name='name'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Registration"
                  className="btn bg-[#FF3811]"
                />
              </div>
              <div>
                <p>
                Already Registered here Please : <Link to="/Login"><span className='font-bold'>Login</span></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration