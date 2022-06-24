import { useState } from 'react';
import NavBar from '../components/NavBar';
import { addBeer } from '../services/beer';

const NewBeerPage = () => {
  const [beer, setBeer] = useState({
    name: 'aaa',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  });

  const handleFormSubmission = (event) => {
    event.preventDefault();
    addBeer(beer);
    console.log(event.target);
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleFormSubmission}>
        <div>
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            placeholder="Name"
            value={beer.name}
            onChange={(event) => {
              setBeer({ ...beer, name: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="input-tagline">Tagline</label>
          <input
            id="input-tagline"
            placeholder="Tagline"
            value={beer.tagline}
            onChange={(event) => {
              setBeer({ ...beer, tagline: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="input-description">Description</label>
          <input
            id="input-description"
            placeholder="Description"
            value={beer.description}
            onChange={(event) => {
              setBeer({ ...beer, description: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="input-first-brewed">First Brewed</label>
          <input
            id="input-first-brewed"
            placeholder="First Brewed"
            value={beer.first_brewed}
            onChange={(event) => {
              setBeer({ ...beer, first_brewed: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="input-brewers-tips">Brewers Tips</label>
          <input
            id="input-brewers-tips"
            placeholder="Brewers Tips"
            value={beer.brewers_tips}
            onChange={(event) => {
              setBeer({ ...beer, brewers_tips: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="input-attenuation-level">Attenuation level</label>
          <input
            id="input-attenuation-level"
            type="number"
            placeholder="Attenuation level"
            value={beer.attenuation_level}
            onChange={(event) => {
              setBeer({ ...beer, attenuation_level: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="input-contributed-by">Contributed by</label>
          <input
            id="input-contributed-by"
            placeholder="Contributed by"
            value={beer.contributed_by}
            onChange={(event) => {
              setBeer({ ...beer, contributed_by: event.target.value });
            }}
          />
        </div>

        <button>Add beer to the list</button>
      </form>
    </div>
  );
};

export default NewBeerPage;
