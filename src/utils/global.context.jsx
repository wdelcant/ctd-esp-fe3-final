import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { getDentists } from '../Services/dentist';

const selecTheme = () => {
  return (
    localStorage.getItem('theme') ||
    (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
};

const selecFavs = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
};

export const initialState = {
  theme: selecTheme(),
  data: [],
  dentistSelected: {},
  favs: selecFavs(),
  toastMessage: null,
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  useEffect(() => {
    getDentists().then((data) => {
      dispatch({ type: 'GET_LIST', payload: data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);
