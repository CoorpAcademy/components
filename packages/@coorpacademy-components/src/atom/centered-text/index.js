import React, {PropTypes} from 'react';
import style from './style.css';

const CenteredText = ({children}) => (
  <div className={style.center}>
    {children}
  </div>
);

CenteredText.propTypes = {
  children: PropTypes.node
};

export default CenteredText;
