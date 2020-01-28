import React from 'react';
import PropTypes from 'prop-types';

export default function HR(props) {
  const { componentToRender } = props.match.params;
  return (
    <div className="setContentInline contentbgColor welcome">
      <h1>This is for hr</h1>
      <p>{componentToRender}</p>
    </div>
  );
}

HR.propTypes = {
  match: PropTypes.object.isRequired
};
