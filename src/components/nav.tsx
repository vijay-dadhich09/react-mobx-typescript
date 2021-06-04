import React from 'react';
import {Link} from 'react-router-dom';

const Nav:React.FC = () => {
  return (
    <nav>
      <h3>logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Register">
        <li>Register</li>
        </Link>
        <Link to="/Profile">
        <li>Profile</li>
        </Link>
       
      </ul>
    </nav>
  )
}

export default Nav;