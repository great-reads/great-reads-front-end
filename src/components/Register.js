import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = 'http://localhost:5000/';
    axios
      .post(`${baseURL}/auth/register`, { email, password })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form>
      <input
        value={email}
        name="email"
        type="text"
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        name="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button>Submit</button>
    </form>
  );
}

export default Register;
