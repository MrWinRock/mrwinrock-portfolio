import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <h3 className="navbar-brand">My Portfolio</h3>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
