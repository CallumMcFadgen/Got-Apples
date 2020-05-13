import React from 'react';
import './../App.css';

function Navbar() {
  return (
    <nav>
        <h1>Navbar</h1>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Growers</li>
            <li>Grower</li>
        </ul>
    </nav>
  );
}

export default Navbar;