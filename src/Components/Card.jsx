import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { id, name, username } = item;
  const { state, dispatch } = useGlobalContext();

  const isFav = state.favs.some(fav => fav.id === item.id);
  const addFav = () => {
    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: item });
    } else {
      dispatch({ type: 'ADD_FAV', payload: item });
    }
  };

  return (
    <div className="card">
      <img className="card img" src="/images/doctor.jpg" alt="avatar" />
      <h3>
        {name} - {username} - {id}
      </h3>

      <Link to={'/detail/' + id}>
        <h3>Ver Detalle</h3>
      </Link>

      <button onClick={addFav} className="favButton">
        {isFav ? 'Remove fav' : 'Add fav'}
      </button>
    </div>
  );
};

export default Card;
