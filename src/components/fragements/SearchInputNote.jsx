import React from 'react';
import PropTypes from 'prop-types';
import Input from '../elements/input/Input';
import LocaleContext from '../../contexts/localeContext';

function SearchInputNote(props) {
  const { title, keywordChange } = props;
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="search-bar">
      <h2>{title}</h2>
      <Input type="text" name="inputSearch" placeHolder={locale === 'id' ? 'Cari berdasarkan judul' : 'Search by title'} isRequired={true} keywordChange={keywordChange} />
    </section>
  );
}

SearchInputNote.propTypes = {
  title: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInputNote;
