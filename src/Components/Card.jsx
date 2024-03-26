import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

import Toast from '../Components/Toast';

const Card = ({ item }) => {
  const { id, name, username } = item;
  const { state, dispatch } = useGlobalContext();

  const isFav = state.favs.some(fav => fav.id === item.id);
  const addFav = () => {
    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: item });
      dispatch({
        type: 'SET_TOAST',
        payload: `El dentista ${name} fue removido de favoritos`,
      });
    } else {
      dispatch({ type: 'ADD_FAV', payload: item });
      dispatch({
        type: 'SET_TOAST',
        payload: `El dentista ${name} fue agregado a favoritos`,
      });
    }
    setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 5000);
  };

  return (
    <div className="card">
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <img className="card img" src="/images/doctor.jpg" alt="avatar" />
      <h3>{name} </h3>
      <h4>{username}</h4>

      <Link to={'/detail/' + id}>
        <button className="detailButton">Ver Detalle</button>
      </Link>

      <label onClick={addFav} className="favButton">
        {isFav ? (
          <img src="/images/fav.svg" className="Fav" alt="Fav" />
        ) : (
          <img src="/images/nofav.svg" className="noFav" alt="noFav" />
        )}
      </label>
    </div>
  );
};

export default Card;
