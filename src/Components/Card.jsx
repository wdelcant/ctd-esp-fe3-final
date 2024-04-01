import { useGlobalContext } from '../utils/global.context';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Toast from '../Hooks/Toast';

const Card = ({ item }) => {
  const { id, name, username } = item;
  const { state, dispatch } = useGlobalContext();
  const [isClicked, setIsClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const isFav = state.favs.some(fav => fav.id === item.id);
  const addFav = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: item });
      dispatch({
        type: 'SET_TOAST',
        payload: `The dentist ${name} was removed from favorites`,
      });
    } else {
      dispatch({ type: 'ADD_FAV', payload: item });
      dispatch({
        type: 'SET_TOAST',
        payload: `The dentist ${name} was added to favorites`,
      });
    }
    setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 5000);
  };

  return loading ? (
    <div className="card card-skeleton">
      <div className="img-skeleton"> </div>
      <p className="text-skeleton"> </p>
      <div className="text-skeleton"> </div>
      <div className="button-skeleton"> </div>
    </div>
  ) : (
    <div className="card">
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <img className="card img" src="/images/doctor.jpg" alt="avatar" />
      <h3>{name} </h3>
      <h4>{username}</h4>

      <Link to={'/detail/' + id}>
        <button className="detailButton">View Details</button>
      </Link>

      <label onClick={addFav} className="favButton">
        {isFav ? (
          <img
            src="/images/fav.svg"
            className={`Fav ${isClicked ? 'animate' : ''}`}
            alt="Fav"
          />
        ) : (
          <img
            src="/images/nofav.svg"
            className={`noFav ${isClicked ? 'animate' : ''}`}
            alt="noFav"
          />
        )}
      </label>
    </div>
  );
};

export default Card;
