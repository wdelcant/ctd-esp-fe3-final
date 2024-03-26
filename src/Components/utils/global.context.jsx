import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { reducer } from '../reducers/reducer';
import { getDentists } from '../../Api/dentist';

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
  dentistSelected: {},
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  useEffect(() => {
    getDentists().then(data => {
      dispatch({ type: 'GET_LIST', payload: data });
      console.log(data);
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
