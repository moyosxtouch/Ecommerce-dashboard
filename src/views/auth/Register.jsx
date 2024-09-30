import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2  ">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold ">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md "
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md "
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md "
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                {" "}
                I agree to privacy policy & terms
              </label>
            </div>

            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Sign Up
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already Have an account ?{" "}
                <Link className="font-bold" to="/login">
                  Sing In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
