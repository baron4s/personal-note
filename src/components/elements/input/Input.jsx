import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { className, type, placeHolder, isRequired, keywordChange, titleChange, changeEmail, changePassword, nameChange, emailChange, passwordChange, confirmPasswordChange } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
      required={isRequired}
      onChange={(event) => {
        if (keywordChange) keywordChange(event.target.value);
        if (titleChange) titleChange(event.target.value);
        if (changeEmail) changeEmail(event.target.value);
        if (changePassword) changePassword(event.target.value);
        if (nameChange) nameChange(event.target.value);
        if (emailChange) emailChange(event.target.value);
        if (passwordChange) passwordChange(event.target.value);
        if (confirmPasswordChange) confirmPasswordChange(event.target.value);
      }}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  placeHolder: PropTypes.string,
  keywordChange: PropTypes.func,
  titleChange: PropTypes.func,
  className: PropTypes.string,
  changePassword: PropTypes.func,
  nameChange: PropTypes.func,
  emailChange: PropTypes.func,
  passwordChange: PropTypes.func,
  confirmPasswordChange: PropTypes.func,
};
export default Input;
