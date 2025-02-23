"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEnvelope, FaBars } from "react-icons/fa";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox"
    });
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center ">
        <div></div>
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/2 p-6">
        <div className="w-full bg-indigo-700 p-4 text-white flex justify-between items-center lg:hidden">
          <FaBars size={24} />
          <h1 className="text-lg font-semibold">HFP</h1>
          <div></div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-400">
            <Link href="/login" className="hover:underline text-indigo-700">Log in</Link>
          </span>
          <span className="text-lg font-semibold text-indigo-700">
            <Link href="/signup" className="hover:underline"> / Sign up</Link>
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-11/12 max-w-sm">
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-medium">
              First Name
              <input type="text" placeholder="First Name" name="firstName" className="w-full p-2 border rounded mt-1" onChange={handleChange} />
            </label>
            <label className="text-sm font-medium">
              Last Name
              <input type="text" placeholder="Last Name" name="lastName" className="w-full p-2 border rounded mt-1" onChange={handleChange} />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <label className="text-sm font-medium">
              Date of Birth
              <input type="text" name="dob" placeholder="DD/MM/YYYY" className="w-full p-2 border rounded mt-1" onChange={handleChange} />
            </label>
            <label className="text-sm font-medium">
              Gender
              <select name="gender" className="w-full p-2 border rounded mt-1" onChange={handleChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <label className="text-sm font-medium mt-3 block">
            Email Address
            <input type="email" placeholder="Email" name="email" className="w-full p-2 border rounded mt-1" onChange={handleChange} />
          </label>
          <div className="grid grid-cols-12 gap-3 mt-3">
            <label className="col-span-4 text-sm font-medium">
              Country Code
              <input type="text" name="countryCode" value="+91 (IND)" className="w-full p-2 border rounded mt-1 bg-gray-200" disabled />
            </label>
            <label className="col-span-8 text-sm font-medium">
              Mobile Number
              <input type="text" placeholder="Mobile Number" name="mobile" className="w-full p-2 border rounded mt-1" onChange={handleChange} />
            </label>
          </div>
          <label className="text-sm font-medium mt-3 block">
            Create Password
            <input type="password" name="password" placeholder="Create Password" className="w-full p-2 border rounded" onChange={handleChange} />
          </label>
          <label className="text-sm font-medium mt-3 block">
            Confirm Password
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border rounded" onChange={handleChange} />
          </label>
          <label className="flex items-center mt-3 text-sm">
            <input type="checkbox" name="agreeToTerms" className="mr-2" onChange={handleChange} />
            Receive relevant offers and promotional communications from us. By signing up, I agree to the terms.
          </label>
        </div>
        <div className="w-11/12 max-w-sm mt-4 text-center">
          <button className="w-full mb-3 bg-indigo-700 text-white py-2 rounded mt-4">Sign up</button>
          <div className="flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full border-indigo-700 flex items-center justify-center border p-2 mt-3 rounded text-gray-700">
            <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
          </button>
          <div className="flex items-center mt-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full mb-4 border-indigo-700 flex items-center justify-center border p-2 mt-3 rounded text-gray-700">
            <FaEnvelope className="mr-2 text-indigo-600" /> Use Corporate Email
          </button>
        </div>
      </div>
    </div>
  );
}
