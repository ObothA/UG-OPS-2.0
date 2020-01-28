import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

export default function Icon(props) {
  const { icon } = props;
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        size: '2em',
        className: 'global-class-name'
      }}
    >
      <span className="userIcon">{icon()}</span>
    </IconContext.Provider>
  );
}

Icon.propTypes = {
  icon: PropTypes.func.isRequired
};
