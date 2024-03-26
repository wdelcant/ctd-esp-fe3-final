import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state, dispatch } = useGlobalContext();

  const clearFavs = () => {
    dispatch({ type: 'CLEAR_FAVS' });
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 && (
        <button onClick={clearFavs}>Vaciar lista de favoritos</button>
      )}
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map(item => <Card key={item.id} item={item} />)
        ) : (
          <h3>No tienes favoritos agregados.</h3>
        )}
      </div>
    </>
  );
};

export default Favs;