import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import Input from '../elements/input/Input';
import Button from '../elements/button/Button';

function RegisterInput({ registerHandler }) {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPassword] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      registerHandler({
        name,
        email,
        password,
      });
    } else {
      alert('password dan konfirmasi password tidak sama');
    }
  };

  return (
    <form className="input-register" onSubmit={onSubmitHandler}>
      <label htmlFor="name">Nama</label>
      <Input type="text" nameChange={handleNameChange} placeHolder="YourName" isRequired={true} />
      <label htmlFor="email">Email</label>
      <Input type="email" emailChange={handleEmailChange} placeHolder="example@gmail.com" isRequired={true} />
      <label htmlFor="password">Email</label>
      <Input type="password" passwordChange={handlePasswordChange} placeHolder="Your password" isRequired={true} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <Input type="password" confirmPasswordChange={handleConfirmPassword} placeHolder="Confirm password" isRequired={true} />
      <Button type="submit" children="Register" />
    </form>
  );
}

RegisterInput.propTypes = {
  registerHandler: PropTypes.func,
};

export default RegisterInput;
