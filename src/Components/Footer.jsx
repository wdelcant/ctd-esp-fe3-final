import { useGlobalContext } from '../Components/utils/global.context';

const Footer = () => {
  const { state } = useGlobalContext();
  return (
    <footer className={state.darkMode ? 'dark' : 'light'}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
