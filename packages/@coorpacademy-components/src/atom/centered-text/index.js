// @flow
import React, {type Children} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export type Props = {|
  children?: Children
|};

const CenteredText = ({children}: Props) => (
  <div className={style.center}>
    {children}
  </div>
);

CenteredText.propTypes = {
  children: PropTypes.node
};

export default CenteredText;
