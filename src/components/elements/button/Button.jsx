import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, type, children, addNote, onArchive, onDelete, archived, id } = props;

  return (
    <button
      className={className}
      type={type}
      onClick={() => {
        if (addNote) addNote();
        if (onArchive) onArchive(id, archived);
        if (onDelete) onDelete(id);
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  archived: PropTypes.bool,
  id: PropTypes.string,
  addNote: PropTypes.func,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Button;
