import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { reducer } from '../reducers/useReducer';

export const initialState = {
  theme: '',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
      useEffect(() => {
        //Mando al LS
        localStorage.setItem('favs', JSON.stringify(state.favs));
      }, [state.favs]);


  return <ContextGlobal.Provider value={{}}>{children}</ContextGlobal.Provider>;
};
