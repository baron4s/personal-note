import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArchiveFill, BsTrash } from 'react-icons/bs';
import Button from '../elements/button/Button';

function DetailPageAction(props) {
  const { id, archived, onArchive, onDelete } = props;

  return (
    <div className="detail-page__action">
      <Button id={id} className="action" type="button" onDelete={onDelete}>
        <BsTrash />
      </Button>
      <Button id={id} archived={archived} className="action" type="button" onArchive={onArchive}>
        <BsFillArchiveFill />
      </Button>
    </div>
  );
}

DetailPageAction.propTypes = {
  id: PropTypes.string,
  archived: PropTypes.bool,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
};

export default DetailPageAction;
