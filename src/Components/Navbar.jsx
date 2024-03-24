import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../Components/utils/routes';
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useGlobalContext();

  return (
    <nav className={state.darkMode ? 'dark' : 'light'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.favs}>Favs</Link>
      <Link to={routes.contact}>Conact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button
        onClick={() =>
          dispatch({
            type: 'CHANGE_THEME',
          })
        }
      >
        Change Theme
      </button>
      <h3>El modo actual es: {state.darkMode ? 'Dark' : 'Light'}</h3>
    </nav>
  );
};

export default Navbar;
