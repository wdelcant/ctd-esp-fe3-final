import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
