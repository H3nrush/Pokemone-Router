import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokemone from './pages/Pokemone';



function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/Pokemone" element = {<Pokemone />}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
