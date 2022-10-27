import test from 'ava';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import {StoreState} from '../../../reducers';
import {mapStateToSkillsProps} from '..';

test('should create initial props when there are no skills on the state', t => {
  const state: StoreState = {
    data: {
      progression: null,
      skills: [],
      slides: {},
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN}
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

  const props = mapStateToSkillsProps(state);

  t.deepEqual(props, {
    'aria-label': '@todo aria-label',
    title: '@todo title',
    titleNoSkills: '@todo title no skills',
    textNoSkills: '@todo text no skills',
    iconSkillAriaLabel: '@todo iconSkillAriaLabel',
    isLoading: false,
    isLoadingAriaLabel: '@todo loading',
    listSkills: []
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
      rank: {start: Number.NaN, end: Number.NaN}
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

  const props = mapStateToSkillsProps(state);

  t.deepEqual(omit('listSkills', props), {
    'aria-label': '@todo aria-label',
    title: '@todo title',
    titleNoSkills: '@todo title no skills',
    textNoSkills: '@todo text no skills',
    iconSkillAriaLabel: '@todo iconSkillAriaLabel',
    isLoading: false,
    isLoadingAriaLabel: '@todo loading'
  });
  t.deepEqual(map(omit('onClick'), props.listSkills), [
    {
      'aria-label': '@todo aria-label skill',
      isCustom: false,
      skillTitle: 'skill-test',
      skillAriaLabel: '@todo skill aria label',
      buttonLabel: '@todo button',
      buttonAriaLabel: '@todo button aria label',
      reviseLabel: '@todo revise',
      reviseAriaLabel: '@todo revise aria label'
    },
    {
      'aria-label': '@todo aria-label skill',
      isCustom: true,
      skillTitle: 'skill-test-2',
      skillAriaLabel: '@todo skill aria label',
      buttonLabel: '@todo button',
      buttonAriaLabel: '@todo button aria label',
      reviseLabel: '@todo revise',
      reviseAriaLabel: '@todo revise aria label'
    }
  ]);
  t.notThrows(() => props.listSkills[0].onClick());
});
