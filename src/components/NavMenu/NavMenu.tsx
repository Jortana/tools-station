import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <>
      <ul className="menu p-4 text-base-content">
        <li>
          <Link to={'/instagram'}>Sidebar Item 1</Link>
        </li>
        <li>
          <Link to={'/test'}>Sidebar Item 2</Link>
        </li>
      </ul>
    </>
  );
}

export default NavMenu;
