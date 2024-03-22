import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../utils/routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}  
      <Link to={routes.home}>Home</Link>
      <Link to={routes.favs}>Favs</Link>
      <Link to={routes.contact}>Conact</Link>
      <Link to={routes.detail}>Detail</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
