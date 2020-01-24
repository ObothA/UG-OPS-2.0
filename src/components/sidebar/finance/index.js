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
        <p>this is the content in the sidebar</p>
        <p>this is the content in the sidebar</p>
        <div>this is the content in the sidebar</div>
      </div>
    </div>
  );
}

Finance.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
