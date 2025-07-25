import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; 
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <h1>Find My IP</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </header>
  );
}