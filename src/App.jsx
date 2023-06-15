import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPageWrapper from './pages/detailPage';
import NewNoteWrapper from './pages/newNote';
import ArchivePage from './pages/archivePage';
import LoginPage from './pages/loginPage';
import ErrorBoundary from './pages/noteFound404';
import RegisterPage from './pages/registerPage';
import { putAccessToken, getUserLogged } from './utils/network-data';
import ThemeContext from './contexts/themeContext';
import HomeNote from './pages/homeNote';
import LocaleContext from './contexts/localeContext';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(() => {
    return localStorage.getItem('locale') || 'id';
  });
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getAutedUser() {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setInitializing(false);
        }, 1000);
      }
    }

    getAutedUser();
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  async function onLoginSuccses({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const contextTheme = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  });

  const contextLocale = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  });

  if (initializing) {
    return (
      <div className="app-container">
        <section className="loader-container">
          <span className="loader"></span>
        </section>
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <Routes>
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/*'} element={<LoginPage loginSuccses={onLoginSuccses} />} />
        </Routes>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={contextTheme}>
      <LocaleContext.Provider value={contextLocale}>
        <div className="app-container">
          <Routes>
            <Route path={'/'} element={<HomeNote userName={authedUser.name} logout={onLogout} />} />
            <Route path={'/archives'} element={<ArchivePage userName={authedUser.name} logout={onLogout} />} />
            <Route path={'/note/:id'} element={<DetailPageWrapper userName={authedUser.name} logout={onLogout} />} />
            <Route path={'/note/new'} element={<NewNoteWrapper userName={authedUser.name} logout={onLogout} />} />
            <Route path="*" element={<ErrorBoundary />} />
          </Routes>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
