import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import CardsGrid from '../../organism/cards-grid';
import style from './continue-learning.css';

const ContinueLearning = (props, context) => {
  const {ongoingCourses} = props;
  const {translate} = context;

  if (ongoingCourses.list.length === 0) {
    return null;
  }

  return (
    <>
      <div className={style.continueLearningWrapper}>
        <span className={style.continueLearningTitle}>{translate('continue_learning')}</span>
        <span className={style.continueLearningNumber}>{ongoingCourses.list.length}</span>
      </div>
      <div>
        <CardsGrid {...ongoingCourses} justifyContent="left" />
      </div>
    </>
  );
};

ContinueLearning.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ContinueLearning.propTypes = {
  ongoingCourses: PropTypes.shape(CardsGrid.propTypes)
};

export default ContinueLearning;
