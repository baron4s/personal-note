import React from 'react';
import PropTypes from 'prop-types';
import Input from '../elements/input/Input';
import Button from '../elements/button/Button';

function LoginInput({ login }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangePasswodHandler = (password) => {
    setPassword(password);
  };

  const onSubmitLoginHandler = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <form className="input-login" onSubmit={onSubmitLoginHandler}>
      <label htmlFor="email">Email</label>
      <Input type="email" changeEmail={onChangeEmailHandler} placeHolder="example@gmail.com" isRequired={true} />
      <label htmlFor="password">Password</label>
      <Input type="password" changePassword={onChangePasswodHandler} placeHolder="Your password" isRequired={true} />
      <Button type="submit" children="Login" />
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func,
};

export default LoginInput;
