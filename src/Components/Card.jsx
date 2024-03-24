import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { state, dispatch } = useGlobalContext();
  const { doctorSelected } = state;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: 'ADD_FAV', payload: doctorSelected });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link to={'/detail/' + item.id}>
        <img
          src={`https://avatars.dicebear.com/api/human/${item.id}.svg`}
          alt="avatar"
        />
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
