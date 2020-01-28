import React from 'react';
import PropTypes from 'prop-types';

import { IoIosPeople } from 'react-icons/io';
import { FaPlaneDeparture, FaFileContract, FaTractor } from 'react-icons/fa';

import Arrow from '../arrow';
import Icon from '../icon';

export default function HR(props) {
  const { toggle, onClick } = props;
  return (
    <div>
      <p onClick={onClick} className="sidebTopNav">
        <Icon icon={() => <IoIosPeople />} />
        Human Resource
        <Arrow toggle={toggle} />
      </p>
      <div
        className={`sidebarDropdownContent ${
          toggle ? 'showContent' : 'dntShowContent'
        }`}
      >
        <p>
          <Icon icon={() => <FaPlaneDeparture />} />
          Leave Application
        </p>

        <p>
          <Icon icon={() => <FaFileContract />} />
          Contract Renewal
        </p>

        <p>
          <Icon icon={() => <FaTractor />} />
          Work Permit Renewal
        </p>
      </div>
    </div>
  );
}

HR.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
