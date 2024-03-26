import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../Routes/routes';
import ToogleButton from './ToggleButton';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.favs}>Favs</Link>
      <Link to={routes.contact}>Conact</Link>
      <ToogleButton />
    </nav>
  );
};

export default Navbar;
