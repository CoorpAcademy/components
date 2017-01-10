import React, {PropTypes} from 'react';

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
