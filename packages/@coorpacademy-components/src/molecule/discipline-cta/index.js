import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
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

  const startButton =
    start &&
    <a
      className={style.start}
      onClick={start}
      style={{
        backgroundColor: startColor
      }}
    >
      {startLearning}
    </a>;

  const buyButton =
    buy &&
    <a className={style.buy} onClick={buy}>
      {premium}
    </a>;

  return (
    <div className={style.head}>
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
