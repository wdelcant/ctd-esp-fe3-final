import { useGlobalContext } from './utils/global.context';
import Layout from './Components/Layout';
import ScrollToTopButton from './Components/ScrollTopButton';

function App() {
  const { state } = useGlobalContext();

  return (
    <div className={`App ${state.theme} `}>
      <Layout />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
