import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';
import { useState } from 'react';
import Toast from '../Components/Toast';

const Favs = () => {
  const { state, dispatch } = useGlobalContext();
  const [toastMessage, setToastMessage] = useState(null);

  const clearFavs = () => {
    dispatch({ type: 'CLEAR_FAVS' });
    dispatch({
      type: 'SET_TOAST',
      payload: 'La lista de favoritos ha sido vaciada',
    });
    setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 5000);
  };

  return (
    <>
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 && (
        <button className="clearButton" onClick={clearFavs}>
          Vaciar lista de favoritos
        </button>
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
