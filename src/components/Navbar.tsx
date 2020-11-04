import React from 'react';

import { useTheme } from '../theme';

import './Navbar.css';

const NavBar = () => {
  const { setTheme } = useTheme();
  return (
    <div className='NavbarContainer'>
      <div style={{ flex: 1 }}>Navbar</div>
      <div>
        <select onChange={e => {
            //@ts-ignore
            setTheme(e.target.value);
          }}
        >
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
