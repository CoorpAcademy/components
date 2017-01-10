import React, {PropTypes} from 'react';

const CenteredText = ({children}) => (
  <div>
    {children}
  </div>
);

CenteredText.propTypes = {
  children: PropTypes.node
};

export default CenteredText;
