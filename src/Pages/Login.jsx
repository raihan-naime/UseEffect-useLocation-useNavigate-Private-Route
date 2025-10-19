import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Login = () => {

  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location);
  

  const {signInUser, signInWithGoogle} = use(AuthContext)
  // console.log(signInUser);
  

  const handleLogIn = (event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
    
    signInUser(email, password)
    .then((result) => {
        console.log(result.user);
        alert("successful");
        event.target.reset();
        navigate(location.state || '/')
      })
      .catch((error) => {
        console.log(error);
        alert("❌❌ Error");
      });

  }

  const handleSignInWithGoogle = ()=>{
    signInWithGoogle()
    .then(result=>{
      result.user
      alert('sign in with google')
      navigate(location?.state || '/')

    })
    .catch(error =>{
      console.log(error);
      
    })
  }
    return (
        <div className="card bg-base-100 mx-auto mt-25 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          <div className="bg-white rounded-full p-2 text-center">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Login now!
            </h1>
          </div>
        </div>

        <h1 className="text-5xl font-bold"></h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Log In</button>
          </fieldset>
        </form>
        {/* Google */}
        <button onClick={handleSignInWithGoogle}
          
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p>
          Already don't have an account ? Please{" "}
          <Link className="text-blue-600 hover:text-blue-400 underline">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
    );
};

export default Login;