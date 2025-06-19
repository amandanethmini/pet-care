import React, { useState } from 'react';
import {setLogin} from '../redux/state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      /*get data after fetching*/
      const loggedIn = await response.json();

      if(loggedIn){
        dispatch(
          setLogin({
            user:loggedIn.user,
            token: loggedIn.token
      })
    )
    navigate("/");

  }
    }catch (err) {
      console.log("Login failed", err.message);
    }
  }

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/aa.jpg')" }}
    >
      <div className="flex flex-col gap-4 w-[40%] p-10 bg-black/80 rounded-2xl lg:w-[60%] md:w-[80%]">
        <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full py-2 px-4 bg-transparent border-b border-white/30 text-center text-white placeholder-white outline-none"
          />
          <button
  type="submit"
  className="mt-4 w-1/2 bg-[#ed8a58] text-black font-semibold py-2 px-4 rounded-lg hover:shadow-[0_0_10px_3px_rgba(202,105,55,0.6)] transition"
>
  Login
</button>

        </form>

        <a href="/register" className="text-white text-[17px] font-semibold text-center hover:underline">
          Don't have an account? Sign In Here
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
