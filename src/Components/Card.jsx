import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { state, dispatch } = useGlobalContext();

  const addFav = () => {
    const isFav = state.favs.some(fav => fav.id === item.id);

    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: item });
    } else {
      dispatch({ type: 'ADD_FAV', payload: item });
    }
  };

  return (
    <div className="card">
      <Link to={'/detail/' + item.id}>
        <img className="card img" src="/images/doctor.jpg" alt="avatar" />
        <h3>
          {item.name} - {item.username} - {item.id}
        </h3>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
