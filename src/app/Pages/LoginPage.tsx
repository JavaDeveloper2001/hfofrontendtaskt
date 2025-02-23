"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEnvelope, FaBars } from "react-icons/fa";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    otpLogin: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
        <div></div>
      </div>

      <div className="flex flex-col items-center w-full lg:w-1/2 p-6">
        <div className="w-full bg-indigo-700 p-4 text-white flex justify-between items-center lg:hidden">
          <FaBars size={24} />
          <h1 className="text-lg font-semibold">HFP</h1>
          <div></div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-lg font-semibold text-indigo-700">
            <Link href="/login" className="hover:underline">Log in</Link>
          </span>
          <span className="text-gray-400">
            <Link href="/signup" className="hover:underline"> / Sign up</Link>
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-11/12 max-w-sm">
          <label className="text-sm font-medium block">
            Email ID
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Email ID"
              onChange={handleChange}
            />
          </label>

          <label className="text-sm font-medium mt-3 block">
            Password
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Password"
              onChange={handleChange}
              disabled={formData.otpLogin}
            />
          </label>

          <div className="flex justify-end text-sm mt-1">
            <a href="#" className="text-indigo-600">Forgot password?</a>
          </div>

          <label className="flex items-center mt-3 text-sm">
            <input
              type="checkbox"
              name="rememberMe"
              className="mr-2"
              onChange={handleChange}
            />
            Remember me
          </label>

          <label className="flex items-center mt-2 text-sm">
            <input
              type="checkbox"
              name="otpLogin"
              className="mr-2"
              onChange={handleChange}
            />
            Log in with OTP instead of Password
          </label>
        </div>
        <div className="w-11/12 max-w-sm mt-4 text-center">
          <button className="w-full bg-indigo-700 text-white py-2 rounded mt-4">Log In</button>
          <div className="flex items-center mt-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full border-indigo-700 flex items-center justify-center border p-2 mt-3 rounded text-gray-700">
            <FaGoogle className="mr-2 text-red-500" /> Log in with Google
          </button>
          <div className="flex items-center mt-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full border-indigo-700 flex items-center justify-center border p-2 mt-3 rounded text-gray-700">
            <FaEnvelope className="mr-2 text-indigo-600" /> Use Corporate Email
          </button>
        </div>
      </div>
    </div>
  );
}
