import React from 'react';
import PropTypes from 'prop-types';

import { GiTakeMyMoney } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Procurement(props) {
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
        Procurement
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
            className: 'global-class-name'
          }}
        >
          <span className="userIcon">
            <GiTakeMyMoney />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}

Procurement.propTypes = {
  toggle: PropTypes.bool
};
