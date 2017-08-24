import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import maxBy from 'lodash/fp/maxBy';
import Provider from '../../../atom/provider';
import style from './style.css';

const QCM = (props, context) => {
  const {answers} = props;
  const longestAnswer = maxBy(({title}) => title.length, answers);

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    const {skin} = context;

    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
    const selectedStyle = selected ? {backgroundColor: primarySkinColor} : null;

    const className = classnames(
      longestAnswer === answer ? style.longestAnswer : style.answer,
      selected ? style.selectedAnswer : style.unselectedAnswer
    );

    return (
      <div
        data-name="answer"
        className={className}
        onClick={onClick}
        style={selectedStyle}
        key={key}
      >
        {title}
      </div>
    );
  });

  return (
    <div data-name="qcm" className={style.wrapper}>
      {answersViews}
    </div>
  );
};

QCM.contextTypes = {
  skin: Provider.childContextTypes.skin
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
