import React from 'react';
import LoginInput from '../components/fragements/LoginInput';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccses }) {
  const onLogin = async ({ email, password }) => {
    console.log({ email, password });
    const { error, data } = await login({ email, password });

    if (!error) loginSuccses(data);
  };

  return (
    <>
      <main>
        <h2>Login Account </h2>
        <LoginInput login={onLogin} />
        <p>
          Belum punya akun ? <Link to={'/register'}>Register di sini</Link>
        </p>
      </main>
    </>
  );
}

LoginPage.propTypes = {
  loginSuccses: PropTypes.func,
};

export default LoginPage;
