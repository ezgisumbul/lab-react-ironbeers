import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { loadRandomBeer, loadSingleBeer } from '../services/beer';

const SingleBeer = ({ isRandom }) => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    let url;
    if (!isRandom) {
      url = `https://ih-beers-api2.herokuapp.com/beers/${id}`;
    } else {
      url = 'https://ih-beers-api2.herokuapp.com/beers/random';
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
      });
  }, [id, isRandom]);

  //   useEffect(() => {
  //     loadRandomBeer().then((data) => {
  //       setBeer(data);
  //     });
  //   }, []);

  //   const fetchBeer = () => {
  //     const response = axios(url)
  //       .then((response) => {
  //         const data = response.data;
  //         console.log(data);
  //         setBeer(data);
  //       })
  //       .catch((error) => {
  //         console.log(error.response);
  //       })
  //   };

  //   loadRandomBeer().then((promise) => {
  //     console.log(promise);
  //   });

  return (
    <div>
      {beer && (
        <div className="single-beer beer-box-txt">
          <img src={beer.image_url} alt={beer.name} />
          <div className="single-beer-element">
            <h2>{beer.name}</h2>
            <h4>{beer.attenuation_level}</h4>
          </div>
          <div className="single-beer-element">
            <h4>{beer.tagline}</h4>
            <small>{beer.first_brewed}</small>
          </div>
          <p className="single-beer-element">{beer.description}</p>
          <small className="single-beer-element">{beer.contributed_by}</small>
        </div>
      )}
    </div>
  );
};

export default SingleBeer;
