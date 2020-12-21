import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {getOr, maxBy} from 'lodash/fp';
import Provider from '../../../atom/provider';
import {innerHTML} from '../../../atom/label/style.css';
import style from './style.css';

const QCM = (props, context) => {
  const {answers} = props;
  const longestAnswer = maxBy(({title}) => title.length, answers);

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    const {skin} = context;

    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
    const selectedStyle = selected
      ? {backgroundColor: primarySkinColor, borderColor: primarySkinColor}
      : null;

    const className = classnames(
      longestAnswer === answer ? style.longestAnswer : style.answer,
      selected ? style.selectedAnswer : style.unselectedAnswer
    );

    return (
      <div
        data-name="answer"
        className={classnames(className, innerHTML)}
        onClick={onClick}
        style={selectedStyle}
        data-selected={selected}
        key={key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
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
