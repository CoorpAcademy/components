import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const QCM = (props, context) => {
  const {answers} = props;

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    const {skin} = context;

    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
    const selectedStyle = selected ? {backgroundColor: primarySkinColor} : null;

    return (
      <div
        className={selected ? style.selected : style.answer}
        onClick={onClick}
        style={selectedStyle}
        key={key}
      >
        {title}
      </div>
    );
  });

  return (
    <div className={style.wrapper}>
      {answersViews}
    </div>
  );
};

QCM.contextTypes = {
  skin: PropTypes.object
};

QCM.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  )
};

export default QCM;
