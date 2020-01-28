import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <Link to="/hr/LeaveApplication">
          <p>
            <Icon icon={() => <FaPlaneDeparture />} />
            Leave Application
          </p>
        </Link>

        <Link to="/hr/ContractRenewal">
          <p>
            <Icon icon={() => <FaFileContract />} />
            Contract Renewal
          </p>
        </Link>

        <Link to="/hr/WorkPermitRenewal">
          <p>
            <Icon icon={() => <FaTractor />} />
            Work Permit Renewal
          </p>
        </Link>
      </div>
    </div>
  );
}

HR.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
