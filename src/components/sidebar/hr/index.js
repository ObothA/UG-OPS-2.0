import React from 'react';
import PropTypes from 'prop-types';

import { IoIosArrowDown, IoIosPeople } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function HR() {
  return (
    <div>
      <p>
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
            className: 'global-class-name'
          }}
        >
          <span className="userIcon">
            <IoIosArrowDown />
          </span>
        </IconContext.Provider>
        Human Resource
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
            className: 'global-class-name'
          }}
        >
          <span className="userIcon">
            <IoIosPeople />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}

HR.propTypes = {
  toggle: PropTypes.bool
};
