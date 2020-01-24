import React from 'react';
import PropTypes from 'prop-types';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconContext } from 'react-icons';

import './finance.css';

export default function Finance(props) {
  const { toggle, onClick } = props;
  return (
    <div>
      <p onClick={onClick} className="sidebTopNav">
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
            className: 'global-class-name'
          }}
        >
          <span className="userIcon">
            {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
      <div
        className={`sidebarDropdownContent ${
          toggle ? 'showContent' : 'dntShowContent'
        }`}
      >
        <p>content 1</p>
        <p>content 2</p>
        <div>content 3</div>
      </div>
    </div>
  );
}

Finance.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
