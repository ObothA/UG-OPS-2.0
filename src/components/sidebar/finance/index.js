import React from 'react';
import PropTypes from 'prop-types';

import { FaFileInvoiceDollar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Finance(props) {
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
            {props.toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </IconContext.Provider>
        Finance
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
            className: 'global-class-name'
          }}
        >
          <span className="userIcon">
            <FaFileInvoiceDollar />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}

Finance.propTypes = {
  toggle: PropTypes.bool
};
