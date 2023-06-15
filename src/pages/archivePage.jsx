import React from 'react';
import PropTypes from 'prop-types';
import { getArchivedNotes } from '../utils/network-data';
import ListItem from '../components/fragements/ListItem';
import HeaderNote from '../components/fragements/HeaderNote';
import NavigateAddNewNote from '../components/fragements/NavigateNewNote';
import SearchInputNote from '../components/fragements/SearchInputNote';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/localeContext';

function ArchivePage({ userName, logout }) {
  const [notes, setArchiveNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchiveNotes(data);
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
        <SearchInputNote title={locale === 'id' ? 'Catatan terarsipkan' : 'Archived note'} keywordChange={onSearchParamsChangeHandler} />
        <ListItem notes={noteSearching} />
        <NavigateAddNewNote />
      </main>
    </>
  );
}

ArchivePage.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};

export default ArchivePage;
