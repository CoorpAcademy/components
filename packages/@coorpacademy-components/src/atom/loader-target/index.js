import React from 'react';
import classnames from 'classnames';
import style from './style.css';

const LoaderTarget = props => {
  const {
    color = '#78f',
    width = '88px',
    height = '88px',
    strokeWidth = '6',
    strokeDasharray = '42',
    animationDuration = '5s',
    className
  } = props;

  return (
    <div
      className={classnames(style.wrap, className)}
      style={{
        width,
        height
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          animationDuration
        }}
      >
        <circle
          className="path"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50%"
          cy="50%"
          r="45%"
          stroke={color}
          strokeDasharray={strokeDasharray}
        >
          {' '}
        </circle>
      </svg>
    </div>
  );
};

LoaderTarget.propTypes = {};

export default LoaderTarget;
