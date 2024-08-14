import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {getOr, sortBy} from 'lodash/fp';
import Provider from '../../atom/provider';
import CardsGrid from '../../organism/cards-grid';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './continue-learning.css';

const ContinueLearning = (props, context) => {
  const {ongoingCourses} = props;
  const {translate} = context;

  const Title = useCallback(
    () => (
      <>
        <span className={style.continueLearningTitle}>{translate('continue_learning')}</span>
        <span className={style.continueLearningNumber}>{ongoingCourses.list.length}</span>
      </>
    ),
    [ongoingCourses, translate]
  );

  if (ongoingCourses.list.length === 0) {
    return null;
  }

  return (
    <CardsList
      cards={sortBy(course => -getOr(0, ['progress'], course), ongoingCourses.list)}
      title={<Title />}
      customStyle={{padding: '16px 0px 8px'}}
    />
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
