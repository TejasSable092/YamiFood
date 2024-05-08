import React from 'react'

const SignIn = () => {
  return (
    
  <>
    <div className="max-w-md mx-auto bg-[#ecf0f1] rounded-lg overflow-hidden shadow-lg p-8 mt-[70px] mb-6">
      <h2 className="text-2xl font-bold mb-4 text-[#e1b12c]" >Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-700 font-semibold mb-2">Your FullName</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter your Full Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className= 'bg-[#e1b12c] text-black py-2 px-4 rounded-lg  focus:outline-none'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </>

  )
}

export default SignIn
