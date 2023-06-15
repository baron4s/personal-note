import React from 'react';
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import DetailNote from '../components/fragements/DetailNote';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderNote from '../components/fragements/HeaderNote';

function DetailPage({ userName, logout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState();

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  const onButtonArchiveHandle = (id, archived) => {
    archived ? unarchiveNote(id).then(() => navigate('/')) : archiveNote(id).then(() => navigate('/'));
  };

  const onButtonDeleteHandler = () => {
    deleteNote(id).then(({ error }) => {
      if (!error) navigate('/');
    });
  };

  return (
    <>
      <HeaderNote userName={userName} logout={logout} />
      <main>
        <section className="detail-page">
          <DetailNote {...note} onArchive={onButtonArchiveHandle} onDelete={onButtonDeleteHandler} />
        </section>
      </main>
    </>
  );
}

DetailPage.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};

export default DetailPage;
