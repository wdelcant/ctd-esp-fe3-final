import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { getDentists } from '../../Api/dentist';


export const initialState = {
  theme: 'light',
  data: [],
  doctorSelected: {},
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getDentists().then(data => {
      dispatch({ type: 'GET_LIST', payload: data });
      console.log(data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);
