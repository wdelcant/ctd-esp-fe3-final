import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { getDentistById } from '../Services/dentist';
import DetailTable from '../Components/DetailTable';
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
    <section className='detailContainer'>
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <h1>Detail Dentist id </h1>
      <DetailTable dentistSelected={dentistSelected} />
      <button onClick={addFav} className="addFavButton">
        {isFav ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </section>
  );
};

export default Detail;
