import { useGlobalContext } from './Components/utils/global.context';
import Layout from './Components/Layout';

function App() {
  const { state } = useGlobalContext();

  return (
    <div className={`App ${state.theme}`}>
      <Layout />
    </div>
  );
}

export default App;
