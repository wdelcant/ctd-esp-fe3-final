import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<h1>Not Found, Error 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
