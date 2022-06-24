import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import AllBeersPage from './pages/AllBeersPage';
import SingleBeerPage from './pages/SingleBeerPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
