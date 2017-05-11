import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout-player';
import style from './style.css';

const Demo = Layout(props => {
  const {plop, plup} = props;
  const text = `[${plop}] [${plup}]`;

  return (
    <p className={style.container}>
      {text}
    </p>
  );
});

Demo.propTypes = {
  plop: PropTypes.string,
  plup: PropTypes.string
};

export default Demo;
