import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Api/dentist';

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
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentistSelected });
    }
  };

  return (
    <>
      <h1>Detail Dentist id </h1>
      <table className="detail-table">
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
              <a href={dentistSelected.website}>{dentistSelected.website}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addFav}>{isFav ? '🔖' : '⭐'}</button>
    </>
  );
};

export default Detail;
