import React, {PropTypes} from 'react';

const CenteredText = ({children}) => (
  <div>
    {children}
  </div>
);

CenteredText.propTypes = {
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

export default CenteredText;
