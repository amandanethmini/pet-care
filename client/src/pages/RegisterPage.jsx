import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === '');
  })

  const Navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const register_form = new FormData();
      for (const key in formData) {
        register_form.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        body: register_form,
      });

      if (response.ok) {
        Navigator("/login");
      } else {
        // Optional: handle error response
        console.log('Registration failed: ', await response.text());
      }
    } catch (err) {
      console.log("Registration failed", err.message);
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center font-nunito"
      style={{
        backgroundImage: "url('/assets/aa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div
        className="flex flex-col gap-4 w-[40%] p-10 bg-black/80 rounded-[20px] 
                   lg:w-[60%] md:w-[80%] sm:w-[90%]"
      >
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />

          {!passwordMatch && (
            <p className="text-red-400 text-sm">Passwords do not match.</p>
          )}

          <input
            id="image"
            type="file"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
            required
            className="hidden"
          />
          <label
            htmlFor="image"
            className="flex flex-col justify-center items-center gap-2 text-white text-sm cursor-pointer"
          >
            <img src="/assets/addImage.png" alt="Upload profile" className="w-[60px]" />
            <p>Upload Your Photo</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover mt-2"
            />
          )}

          {!passwordMatch && (
            <p className="text-red-400 text-sm">Passwords do not match.</p>
          )}

          <button
            type="submit" disabled={!passwordMatch}
            className="mt-4 w-1/2 bg-[#ed8a58] text-black font-semibold py-2 px-4 rounded-lg hover:shadow-[0_0_10px_3px_rgba(224,33,138,0.6)] transition"
          >
            REGISTER
          </button>
        </form>

        <a
          href="/login"
          className="text-white text-s mt-3 text-center hover:underline"
        >
          Already have an account? Log In Here
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
