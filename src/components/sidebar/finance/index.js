import React from 'react';
import PropTypes from 'prop-types';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import Icon from '../icon';

import Arrow from '../arrow';
import './finance.css';

export default function Finance(props) {
  const { toggle, onClick } = props;

  return (
    <div>
      <p onClick={onClick} className="sidebTopNav">
        <Icon icon={() => <FaFileInvoiceDollar />} />
        Finance
        <Arrow toggle={toggle} />
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
