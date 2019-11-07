import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import Provider from '../../atom/provider';
import style from './style.css';

const DisciplineCTA = (props, context) => {
  const {skin} = context;

  const {startLabel, buyLabel, start, buy} = props;

  const startLearning = (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: startLabel
      }}
    />
  );
  const premium = (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: buyLabel
      }}
    />
  );

  const startColor = getOr('#f0f', 'common.primary', skin);

  const startButton = start && (
    <a
      data-name="start"
      className={style.start}
      onClick={start}
      style={{
        backgroundColor: startColor
      }}
    >
      {startLearning}
    </a>
  );

  const buyButton = buy && (
    <a data-name="buy" className={style.buy} onClick={buy}>
      {premium}
    </a>
  );

  return (
    <div data-name="disciplineCta" className={style.head}>
      {startButton}
      {buyButton}
    </div>
  );
};

DisciplineCTA.contextTypes = {
  skin: Provider.childContextTypes.skin
};

DisciplineCTA.propTypes = {
  startLabel: PropTypes.string,
  buyLabel: PropTypes.string,
  start: PropTypes.func,
  buy: PropTypes.func
};

export default DisciplineCTA;
