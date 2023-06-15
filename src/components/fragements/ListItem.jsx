import React from 'react';
import PropTypes from 'prop-types';
import ItemNote from './ItemNote';
import LocaleContext from '../../contexts/localeContext';

function ListItem(props) {
  const { notes } = props;
  const { locale } = React.useContext(LocaleContext);

  return notes.length <= 0 ? (
    <section className="notes-list-empty">
      <p>{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>
    </section>
  ) : (
    <section className="notes-list">
      {notes.map((note) => {
        return <ItemNote {...note} key={note.id} />;
      })}
    </section>
  );
}

ListItem.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListItem;
