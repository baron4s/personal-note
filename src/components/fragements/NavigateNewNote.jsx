import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavigateAddNewNote() {
  return (
    <div className="add-new-page__action">
      <Link className="action" to={'/note/new'}>
        <FiPlusCircle />
      </Link>
    </div>
  );
}

export default NavigateAddNewNote;
