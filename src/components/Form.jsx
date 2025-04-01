import React from "react";

const Form = () => {
  return (
    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Welcome Back</h2>
      <form className="text-left">
        <div className="mb-4">
          <label className="block text-sm mb-2 font-bold text-[18px]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm mb-2 flex justify-between font-bold text-[18px]">
            Password{" "}
            <a href="/forgot" className="underline text-sm text-gray-500">
              Forgot your password?
            </a>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition">
          Login
        </button>
      </form>
      <button className="w-full mt-4 border border-gray-600 py-3 rounded-full hover:bg-gray-100 transition font-bold text-gray-600 ">
        Sign Up
      </button>
    </div>
  );
};

export default Form;
