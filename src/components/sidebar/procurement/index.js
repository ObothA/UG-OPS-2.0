import React from 'react';
import PropTypes from 'prop-types';
import { GiTakeMyMoney } from 'react-icons/gi';

import Arrow from '../arrow';
import Icon from '../icon';

export default function Procurement(props) {
  const { toggle, onClick } = props;
  return (
    <div>
      <p onClick={onClick} className="sidebTopNav">
        <Icon icon={() => <GiTakeMyMoney />} />
        Procurement
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

Procurement.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};
