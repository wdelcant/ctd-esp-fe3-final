import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../Routes/routes';
import ToogleButton from './ToggleButton';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Logo" />
      <div>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.favs}>Favs</Link>
        <Link to={routes.contact}>Contact</Link>
      </div>
      <ToogleButton />
    </nav>
  );
};

export default Navbar;
