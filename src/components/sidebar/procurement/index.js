import React from 'react';
import PropTypes from 'prop-types';

import { GiTakeMyMoney } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Procurement(props) {
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

Procurement.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
