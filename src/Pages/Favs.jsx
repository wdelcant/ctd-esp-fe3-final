import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <h1>Dentists Favs</h1>
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
