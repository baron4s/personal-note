import React from 'react';
import PropTypes from 'prop-types';
import { FiPlusCircle } from 'react-icons/fi';
import Input from '../elements/input/Input';
import Button from '../elements/button/Button';

function AddNote(props) {
  const { titleChange, bodyChange, addNote } = props;
  return (
    <>
      <Input className="add-new-page__input__title" type="text" placeHolder="Isi judul disini" titleChange={titleChange} />

      <div className="add-new-page__input__body" contentEditable={true} data-placeholder="Silahkan masukkan isi catatan disini" onInput={(e) => bodyChange(e.target.innerText)}></div>

      <div className="add-new-page__action">
        <Button type="button" className="action" addNote={addNote}>
          <FiPlusCircle />
        </Button>
      </div>
    </>
  );
}

AddNote.propTypes = {
  titleChange: PropTypes.func.isRequired,
  bodyChange: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

export default AddNote;
