import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AllBeersPage = () => {
  const [beerList, setBeerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) =>
        //   console.log(response);
        response.json()
      )
      .then((beers) => {
        console.log(beers);
        setBeerList(beers);
      });
  }, []);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((beers) => {
        setBeerList(beers);
      });
  }, [searchTerm]);

  return (
    <div>
      <NavBar />
      <div className="search-bar">
        <form>
          <input
            id="input-search-beer"
            placeholder="Search beers"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
      </div>

      <ul>
        {beerList.map((beer) => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="beer-box">
                <div className="beer-box-img">
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="beer-box-txt">
                  <h2>{beer.name}</h2>
                  <h4>{beer.tagline}</h4>
                  <small>
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </small>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
