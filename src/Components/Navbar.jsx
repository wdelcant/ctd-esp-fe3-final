import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../Components/utils/routes';
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  const { toggleTheme } = useGlobalContext();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.favs}>Favs</Link>
      <Link to={routes.contact}>Conact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={toggleTheme}>Cambiar tema</button>

    </nav>
  );
};

export default Navbar;
