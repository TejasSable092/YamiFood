import React, { useState } from 'react';

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.fullName) {
      isValid = false;
      errors['fullName'] = 'Please enter your full name.';
    }

    if (!formValues.email) {
      isValid = false;
      errors['email'] = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      isValid = false;
      errors['email'] = 'Email is not valid.';
    }

    if (!formValues.password) {
      isValid = false;
      errors['password'] = 'Please enter your password.';
    }

    if (!formValues.confirmPassword) {
      isValid = false;
      errors['confirmPassword'] = 'Please confirm your password.';
    } else if (formValues.password !== formValues.confirmPassword) {
      isValid = false;
      errors['confirmPassword'] = 'Passwords do not match.';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid. Submitting...');
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-[#ecf0f1] rounded-lg overflow-hidden shadow-lg p-8 mt-[70px] mb-6">
        <h2 className="text-2xl font-bold mb-4 text-[#e1b12c]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Your Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formValues.fullName}
              onChange={handleChange}
            />
            {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#e1b12c] text-black py-2 px-4 rounded-lg focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
