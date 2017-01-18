import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

const DisciplineCTA = (props, context) => {
  const {
    start,
    buy
  } = props;

  const {
    translate = identity
  } = context;

  const startLearning = (
    <span
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: translate('Start <span>learning</span>')
      }}
    />
  );
  const premium = (
    <span
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: translate('Coorpacademy <span>subscription</span>')
      }}
    />
  );

  return (
    <div className={style.head}>
      <a
        className={`${style.start} ${hoverFill}`}
        onClick={start}
      >
        {startLearning}
      </a>
      <a
        className={`${style.buy} ${hoverFill}`}
        onClick={buy}
      >
        {premium}
      </a>
    </div>
  );
};

DisciplineCTA.contextTypes = {
  translate: React.PropTypes.func
};

DisciplineCTA.propTypes = {
  start: PropTypes.func,
  buy: PropTypes.func
};
export default DisciplineCTA;
