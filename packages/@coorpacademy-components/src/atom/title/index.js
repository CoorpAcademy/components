import React, {PropTypes} from 'react';

const Title = ({children, ...props}) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
      ])
    )
  ])
};
export default Title;
