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

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: 'ADD_FAV', payload: doctorSelected });
  };

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <h1>Detail Dentist id </h1>
      <p>name: {doctorSelected.name}</p>
      <p>
        email:{' '}
        <a href={`mailto:${doctorSelected.email}`}>{doctorSelected.email}</a>
      </p>
      <p>
        phone:{' '}
        <a href={`tel:${doctorSelected.phone}`}>{doctorSelected.phone}</a>
      </p>
      <p>
        website: <a href={doctorSelected.website}> {doctorSelected.website}</a>
      </p>

      <button onClick={addFav}>⭐</button>
    </>
  );
};

export default Detail;
