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
      payload: 'The favorites list has been cleared',
    });
    setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 5000);
  };

  return (
    <section className="favContainer">
      {state.toastMessage && <Toast message={state.toastMessage} />}
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 && (
        <button className="clearButton" onClick={clearFavs}>
          Clear favorites list
        </button>
      )}
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map(item => <Card key={item.id} item={item} />)
        ) : (
          <h3>You have no favorites added.</h3>
        )}
      </div>
    </section>
  );
};

export default Favs;
