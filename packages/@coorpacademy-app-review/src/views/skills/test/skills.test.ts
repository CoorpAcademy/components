import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import {StoreState} from '../../../reducers';
import {mapStateToSkillsProps} from '..';
import {translate} from '../../../test/util/services.mock';

const connectedOptions = {translate, onQuitClick: identity};

test('should create initial props when there are no skills on the state', t => {
  const state: StoreState = {
    data: {
      progression: null,
      skills: [],
      slides: {},
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: null
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      positions: [0, 1, 2, 3, 4],
      navigation: ['loader', 'skills'],
      answers: {},
      slide: {},
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSkillsProps(state, connectedOptions);

  t.deepEqual(props, {
    'aria-label': translate('Review Skills Container'),
    title: translate('Skills you can review'),
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    listSkills: [],
    titleNoSkills: translate('No skill to revise'),
    textNoSkills: translate('Complete courses before revising'),
    iconSkillAriaLabel: 'Image without information'
  });
});

test('should create initial props when skills on the state', t => {
  const state: StoreState = {
    data: {
      progression: null,
      skills: [
        {
          skillRef: '_skill-ref',
          slidesToReview: 2,
          name: 'skill-test',
          custom: false
        },
        {
          skillRef: '_skill-ref-2',
          slidesToReview: 5,
          name: 'skill-test-2',
          custom: true
        }
      ],
      slides: {},
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: null
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      positions: [0, 1, 2, 3, 4],
      navigation: ['loader', 'skills'],
      answers: {},
      slide: {},
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSkillsProps(state, connectedOptions);

  t.deepEqual(omit('listSkills', props), {
    'aria-label': translate('Review Skills Container'),
    title: translate('Skills you can review'),
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    titleNoSkills: translate('No skill to revise'),
    textNoSkills: translate('Complete courses before revising'),
    iconSkillAriaLabel: 'Image without information'
  });
  t.deepEqual(map(omit('onClick'), props.listSkills), [
    {
      'aria-label': translate('Skill Card'),
      isCustom: false,
      skillTitle: 'skill-test',
      skillAriaLabel: 'skill-test',
      buttonLabel: translate('Review this skill'),
      buttonAriaLabel: translate('Review this skill'),
      reviseLabel: translate('{{count}} questions to review', {count: 2}),
      reviseAriaLabel: translate('{{count}} questions to review', {count: 2})
    },
    {
      'aria-label': translate('Skill Card'),
      isCustom: true,
      skillTitle: 'skill-test-2',
      skillAriaLabel: 'skill-test-2',
      buttonLabel: translate('Review this skill'),
      buttonAriaLabel: translate('Review this skill'),
      reviseLabel: translate('{{count}} questions to review', {count: 5}),
      reviseAriaLabel: translate('{{count}} questions to review', {count: 5})
    }
  ]);
  t.notThrows(() => props.listSkills[0].onClick());
});
