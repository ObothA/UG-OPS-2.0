import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './headerRight.css';

export default function HeaderRight() {
  return (
    <div className="inlineHeader headerRight">
      <IconContext.Provider
        value={{
          color: 'darkblue',
          size: '2em',
          className: 'global-class-name'
        }}
      >
        <span className="userIcon">
          <FaUserCircle />
        </span>
      </IconContext.Provider>
    </div>
  );
}
