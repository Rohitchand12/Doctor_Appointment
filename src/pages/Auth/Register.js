import React from "react";
import login from "../../assets/images/login-banner.png";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div>
          <img src={login} />
        </div>
        <div className="max-h-fit w-[90%] lg:w-[70%] my-20 border-[1px] border-gray-200 rounded-lg p-10">
          <h1 className="text-xl text-gray-500 font-semibold mb-5">
            Doctor/Patient Login
          </h1>
          <form className="flex flex-col">
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="First name"
              type="text"
            ></input>
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="Last name"
              type="text"
            ></input>
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="Username"
              type="text"
            ></input>
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="Email"
              type="email"
            ></input>
            <select className="text-gray-400 border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg">
                <option >India</option>
                <option >Australia</option>
                <option >Canada</option>
                <option >UK</option>
            </select>
            
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="Password"
              type="password"
            ></input>
            <input
              className="border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg"
              placeholder="Re-type password"
              type="password"
            ></input>
            {/* <div className="flex">
                <label className="w-[50%] border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg">
                    <input
                    className="mr-5"
                    value = "Doctor"
                    name = "doctor"
                    type="radio"
                    ></input>
                Doctor
                </label>
                <label className="w-[50%] border-[1px] border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none transition all duration-[0.1s] ease-in my-1 p-4 rounded-lg">
                    <input
                    className="mr-5"
                    value = "Patient"
                    name = "Patient"
                    type="radio"
                    ></input>
                Patient
                </label>
            </div> */}
            <input
              className="bg-emerald-400 p-4 rounded-lg my-4 text-white text-xl font-semibold"
              type="submit"
              value="Signup"
            />
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
