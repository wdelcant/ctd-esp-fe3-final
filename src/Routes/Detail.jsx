import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Api/dentist';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const { dentistSelected } = state;

  useEffect(() => {
    getDentistById(id).then(data => {
      dispatch({ type: 'GET_DETAIL', payload: data });
    });
  }, [id]);

  const addFav = () => {
    const isFav = state.favs.some(fav => fav.id === dentistSelected.id);

    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: dentistSelected });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentistSelected });
    }
  };

  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>name: {dentistSelected.name}</p>
      <p>
        email:{' '}
        <a href={`mailto:${dentistSelected.email}`}>{dentistSelected.email}</a>
      </p>
      <p>
        phone:{' '}
        <a href={`tel:${dentistSelected.phone}`}>{dentistSelected.phone}</a>
      </p>
      <p>
        website:{' '}
        <a href={dentistSelected.website}> {dentistSelected.website}</a>
      </p>

      <button onClick={addFav}>⭐</button>
    </>
  );
};

export default Detail;
