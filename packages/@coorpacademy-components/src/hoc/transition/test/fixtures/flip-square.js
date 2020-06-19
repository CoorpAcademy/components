import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const FlippableSquare = ({className, onTransitionEnd}) => (
  <div className={classnames(className, style.container)}>
    <div className={style.square} onTransitionEnd={onTransitionEnd}>
      <div className={style.front}>
        <p>What is behind that card ?</p>
        <p>Click on animated checkbox to see</p>
      </div>
      <div className={style.back} />
    </div>
  </div>
);

FlippableSquare.propTypes = {
  className: PropTypes.string,
  onTransitionEnd: PropTypes.func
};

export default {
  props: {
    name: 'flippableSquare',
    animated: false,
    className: style.flipped,
    onTransitionEnd: () => console.log('flip done !')
  },
  children: <FlippableSquare />
};
