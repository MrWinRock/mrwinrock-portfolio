import { Link } from 'react-router-dom';

import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <Link to="/">
          <h3 className="navbar-brand">MrWinRock</h3>
        </Link>
        <ul className="navbar-links">
          <li className='link'>
            <Link to="/">
              <GoHome /> Home
            </Link>
          </li>
          <li className='link'>
            <Link to="/about">
              <FaRegUser /> About
            </Link>
          </li>
          <li className='link'>
            <Link to="/projects">
              <MdComputer /> Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;