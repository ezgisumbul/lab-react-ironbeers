import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <Link to={'/beers'}>
          <img src={'./../assets/beers.png'} alt="All Beers" />
          <h1 className="content-title">All Beers</h1>
          <h4 className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            hic dolor laboriosam dolores. Aspernatur deleniti minima odit atque
            porro, similique architecto, modi quibusdam laboriosam provident
            error quasi iste dignissimos?
          </h4>
        </Link>
      </div>

      <div className="content">
        <Link to={'/random-beer'}>
          <img src={'./../assets/random-beer.png'} alt="Random Beer" />
          <h1 className="content-title">Random Beer</h1>
          <h4 className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            hic dolor laboriosam dolores. Aspernatur deleniti minima odit atque
            porro, similique architecto, modi quibusdam laboriosam provident
            error quasi iste dignissimos?
          </h4>
        </Link>
      </div>

      <div className="content">
        <Link to={'/new-beer'}>
          <img src={'./../assets/new-beer.png'} alt="New Beer" />
          <h1 className="content-title">New Beer</h1>
          <h4 className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            hic dolor laboriosam dolores. Aspernatur deleniti minima odit atque
            porro, similique architecto, modi quibusdam laboriosam provident
            error quasi iste dignissimos?
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
