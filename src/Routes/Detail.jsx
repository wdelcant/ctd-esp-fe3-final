import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Api/dentist';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();

  const { state, dispatch } = useGlobalContext();
  const { doctorSelected } = state;

  useEffect(() => {
    getDentistById(id).then(data => {
      dispatch({ type: 'GET_DETAIL', payload: data });
    });
  }, [id]);

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <h1>Detail Dentist id </h1>
      <p>name: {doctorSelected.name}</p>
      <p>email: {doctorSelected.email}</p>
      <p>phone: {doctorSelected.phone}</p>
      <p>website: {doctorSelected.website}</p>

      <button
        onClick={() => dispatch({ type: 'ADD_FAV', payload: doctorSelected })}
      >
        ⭐
      </button>
    </>
  );
};

export default Detail;
