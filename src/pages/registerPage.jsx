import React from 'react';
import RegisterInput from '../components/fragements/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterInput(user) {
    const { error } = await register(user);
    console.log(error);
    if (!error) navigate('/');
  }

  return (
    <>
      <main>
        <h2>Register New Account</h2>
        <RegisterInput registerHandler={onRegisterInput} />
        <p>
          Sudah punyak Akun ? <Link to={'/'}>Login</Link>
        </p>
      </main>
    </>
  );
}

export default RegisterPage;
