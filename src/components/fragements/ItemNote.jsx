import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../utils';
function ItemNote(props) {
  const { id, title, body, createdAt } = props;

  return (
    <div className="note-item">
      <h4 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h4>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="note-item__body">
        <p>{body}</p>
      </div>
    </div>
  );
}

ItemNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ItemNote;
