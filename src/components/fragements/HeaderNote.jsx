import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { MdDarkMode, MdLightMode, MdGTranslate } from 'react-icons/md';
import ThemeContext from '../../contexts/themeContext';
import LocaleContext from '../../contexts/localeContext';

function HeaderNote({ logout, userName }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <header className="navigation" style={{ gap: '1rem' }}>
      <h1>
        <Link to={'/'}>{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</Link>
      </h1>
      <h2>
        <Link to={'/archives'}>{locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
      </h2>
      <button type="button" className="toggle-theme" onClick={toggleTheme}>
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <button type="button" className="toggle-locale" onClick={toggleLocale}>
        <MdGTranslate />
        {locale === 'id' ? 'en' : 'id'}
      </button>
      <button type="button" className="button-logout" onClick={logout}>
        <FiLogOut />
        {userName}
      </button>
    </header>
  );
}
HeaderNote.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};

export default HeaderNote;
