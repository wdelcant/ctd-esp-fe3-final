import { useGlobalContext } from '../Components/utils/global.context';

const Footer = () => {
  const { state } = useGlobalContext();
  return (
    <footer className="footer">
      <p className="footer-text">Powered by</p>
      <img className="footer-img" src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
