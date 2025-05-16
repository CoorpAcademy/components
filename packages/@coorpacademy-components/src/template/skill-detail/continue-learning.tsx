import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {getOr, sortBy} from 'lodash/fp';
import Provider from '../../atom/provider';
import CardsGrid, {CardsGridProps} from '../../organism/cards-grid';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './continue-learning.css';

interface ProviderContext {
  skin: {
    common: {
      primary: string;
      secondary: string;
    };
  };
  translate: (key: string, options?: any) => string;
}

const ContinueLearning = (props: {ongoingCourses: CardsGridProps}, context: ProviderContext) => {
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
      // to override CardList wrapper padding
      customStyle={{padding: '0px'}}
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
