import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import DetailPageAction from './DetailPageAction';

function DetailNote(props) {
  const { id, title, createdAt, body, archived, onArchive, onDelete } = props;

  return (
    <>
      <h1 className="detail-page__title">{title}</h1>
      <h5 className="detail-page__createdAt">{createdAt ? showFormattedDate(createdAt) : ''}</h5>
      <div className="detail-page__body">
        <p>{body}</p>
      </div>
      <DetailPageAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </>
  );
}

DetailNote.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
};

export default DetailNote;
