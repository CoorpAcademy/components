import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import CardsGrid from '../../organism/cards-grid';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './continue-learning.css';

const ContinueLearning = (props, context) => {
  const {ongoingCourses} = props;
  const {translate} = context;

  if (ongoingCourses.list.length === 0) {
    return null;
  }

  const Title = () => (
    <>
      <span className={style.continueLearningTitle}>{translate('continue_learning')}</span>
      <span className={style.continueLearningNumber}>{ongoingCourses.list.length}</span>
    </>
  );

  return (
    <CardsList cards={ongoingCourses.list} title={<Title />} customStyle={{padding: '16px 0px 8px'}}/>
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
