import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src="/assets/beer-icon.png" alt="home page icon" />
      </Link>
    </div>
  );
};

export default NavBar;
