import React from 'react';
import { getActiveNotes } from '../utils/network-data';
import PropTypes from 'prop-types';
import HeaderNote from '../components/fragements/HeaderNote';
import SearchInputNote from '../components/fragements/SearchInputNote';
import ListItem from '../components/fragements/ListItem';
import NavigateAddNewNote from '../components/fragements/NavigateNewNote';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/localeContext';

function HomeNote({ userName, logout }) {
  const [notes, setNote] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNote(data);
    });

    setKeyword(() => {
      return searchParams.get('note') || '';
    });
  }, []);

  const onSearchParamsChangeHandler = (search) => {
    setKeyword(search);
    setSearchParams({ note: search });
  };

  const noteSearching = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <HeaderNote userName={userName} logout={logout} />
      <main>
        <SearchInputNote title={locale === 'id' ? 'Catatan aktif' : 'Active note'} keywordChange={onSearchParamsChangeHandler} />
        <ListItem notes={noteSearching} />
        <NavigateAddNewNote />
      </main>
    </>
  );
}

HomeNote.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};

export default HomeNote;
