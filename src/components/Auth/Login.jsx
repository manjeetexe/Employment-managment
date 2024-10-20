import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);  // Corrected spelling here
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3'
            type='password'
            placeholder='Enter Password'
          />
          <button className='mt-7 text-white outline-none border-2 border-none bg-emerald-600 rounded-full py-3 px-5 w-full text-xl'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;