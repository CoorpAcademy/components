import React from 'react';
import Title from '../../../../../atom/title';
import TitleProps from '../../../../../atom/title/test/fixtures/form-group-title-icon-tag';

import {defaultProps as FirstCard} from '../../../../learning-priority-card/test/fixtures/default';
import {defaultProps as SecondCard} from '../../../../learning-priority-card/test/fixtures/certification-type-100';
import {defaultProps as ThirdCard} from '../../../../learning-priority-card/test/fixtures/skill-type-0';

export default {
  props: {
    title: <Title {...TitleProps.props} />,
    cards: [
      FirstCard,
      SecondCard,
      ThirdCard,
      FirstCard,
      SecondCard,
      ThirdCard,
      FirstCard,
      SecondCard,
      ThirdCard
    ],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    type: 'learningPrioritiesCards'
  }
};
