import React from 'react';
import PropTypes from 'prop-types';

const Title = ({children}) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node
};
export default Title;
