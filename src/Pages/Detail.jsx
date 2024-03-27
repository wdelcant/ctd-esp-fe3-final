import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Services/dentist';
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
        payload: `The dentist ${dentistSelected.name} was removed from favorites`,
      });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentistSelected });
      dispatch({
        type: 'SET_TOAST',
        payload: `The dentist ${dentistSelected.name} was added to favorites`,
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
                href={dentistSelected.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dentistSelected.website}
              </a>
            </td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>
              <iframe
                title="Map Location"
                width="100%"
                height="150"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  parseFloat(dentistSelected.address?.geo?.lng) - 0.01
                }%2C${parseFloat(dentistSelected.address?.geo?.lat) - 0.01}%2C${
                  parseFloat(dentistSelected.address?.geo?.lng) + 0.01
                }%2C${
                  parseFloat(dentistSelected.address?.geo?.lat) + 0.01
                }&layer=mapnik&marker=${dentistSelected.address?.geo?.lat}%2C${
                  dentistSelected.address?.geo?.lng
                }`}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addFav} className="addFavButton">
        {isFav ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </>
  );
};

export default Detail;
