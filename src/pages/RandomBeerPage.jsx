import NavBar from '../components/NavBar';
import SingleBeer from '../components/SingleBeer';

const RandomBeerPage = () => {
  return (
    <div>
      <NavBar />
      <SingleBeer isRandom={true} />
    </div>
  );
};

export default RandomBeerPage;
