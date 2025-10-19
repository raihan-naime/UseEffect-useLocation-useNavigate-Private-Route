
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const Register = () => {
  const { createUser } = use(AuthContext);
//   console.log(createUser);

  const handleRegisterWithEmail = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("successful");
      })
      .catch((error) => {
        console.log(error);
        alert("❌❌ Error");
      });
  };

  return (
    <div className="card bg-base-100 mx-auto mt-25 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          <div className="bg-white rounded-full p-2 text-center">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Register now!
            </h1>
          </div>
        </div>

        <h1 className="text-5xl font-bold"></h1>
        <form onSubmit={handleRegisterWithEmail}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
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

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account ? Please{" "}
          <Link
            to={"/login"}
            className="text-blue-600 hover:text-blue-400 underline"
          >
            Log In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
