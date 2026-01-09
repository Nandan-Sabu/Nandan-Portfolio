import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/projects" className="nav">Projects</NavLink>
      <NavLink to="/contact" className="nav">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
