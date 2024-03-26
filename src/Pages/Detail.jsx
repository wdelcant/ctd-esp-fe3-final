import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Api/dentist';
import { useState } from 'react';
import Toast from '../Components/Toast';

const Detail = () => {
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const { dentistSelected } = state;

  useEffect(() => {
    getDentistById(id).then(data => {
      dispatch({ type: 'GET_DETAIL', payload: data });
    });
  }, [id]);

  const isFav = state.favs.some(fav => fav.id === dentistSelected.id);

  const addFav = () => {
    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: dentistSelected });
      dispatch({
        type: 'SET_TOAST',
        payload: `El dentista ${dentistSelected.name} fue removido de favoritos`,
      });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentistSelected });
      dispatch({
        type: 'SET_TOAST',
        payload: `El dentista ${dentistSelected.name} fue agregado a favoritos`,
      });
    }
    setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 3000);
  };

  return (
    <>
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <h1>Detail Dentist id </h1>
      <table className="detailTable">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{dentistSelected.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <a href={`mailto:${dentistSelected.email}`}>
                {dentistSelected.email}
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>
              <a href={`tel:${dentistSelected.phone}`}>
                {dentistSelected.phone}
              </a>
            </td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>
              <a
                href={
                  dentistSelected.website.startsWith('http')
                    ? dentistSelected.website
                    : `http://${dentistSelected.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {dentistSelected.website}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addFav} className="addFavButton">
        {isFav ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      </button>
    </>
  );
};

export default Detail;
